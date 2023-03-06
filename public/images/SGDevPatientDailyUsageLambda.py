import time
import boto3
import datetime
import json

assess_day = "2022-10-03"
assess_start_utc = "2022-10-03"
assess_end_utc = "2022-10-04"

query = f"""
  SELECT 
    DATE(date_parse('{assess_day}', '%Y-%m-%d')) AS assess_day,
    CASE WHEN s.user_id IS NULL THEN s.user_id ELSE s.user_id END AS user_id,
    CASE WHEN s.rr_usage_duration_hrs IS NULL THEN 0 ELSE s.rr_usage_duration_hrs END AS rr_usage_duration_hrs,
    CASE WHEN s.rr_onskin_duration_hrs IS NULL THEN 0 ELSE s.rr_onskin_duration_hrs END AS rr_onskin_duration_hrs,
    CASE WHEN s.hr_usage_duration_hrs IS NULL THEN 0 ELSE s.hr_usage_duration_hrs END AS hr_usage_duration_hrs,
    CASE WHEN s.hr_onskin_duration_hrs IS NULL THEN 0 ELSE s.hr_onskin_duration_hrs END AS hr_onskin_duration_hrs,
    CASE WHEN s.total_usage_duration_hrs IS NULL THEN 0 ELSE s.total_usage_duration_hrs END AS total_usage_duration_hrs
  FROM (
    SELECT CAST(user_id AS INT) AS user_id, 
      SUM(CASE WHEN dashboardmode='RR' THEN recordduration_seconds ELSE 0 END)/3600 AS rr_usage_duration_hrs,
      SUM(CASE WHEN dashboardmode='RR' AND sensor_onskin_status=1 THEN recordduration_seconds ELSE 0 END)/3600 AS rr_onskin_duration_hrs,
      SUM(CASE WHEN dashboardmode='HR' THEN recordduration_seconds ELSE 0 END)/3600 AS hr_usage_duration_hrs,
      SUM(CASE WHEN dashboardmode='HR' AND sensor_onskin_status=1 THEN recordduration_seconds ELSE 0 END)/3600 AS hr_onskin_duration_hrs,
      SUM(recordduration_seconds)/3600 AS total_usage_duration_hrs
    FROM (
        SELECT
         userId AS user_id, dashboardMode,  sensor_onskin_status,
         CASE dashboardMode 
         WHEN 'RR' THEN 0.06*recordreceivedbygateway
         WHEN 'HR' THEN 0.04*recordreceivedbygateway
         ELSE 0
         END as recordduration_seconds
        FROM "azprod-dataprocessing-dynamodb"."default"."respiree-data-processing-mj7rfl8r0p" 
      WHERE date_parse(datetime,'%Y-%m-%d %H:%i:%S') BETWEEN
        date_parse('{assess_start_utc} 16:00:00','%Y-%m-%d %H:%i:%S') AND
        date_parse('{assess_end_utc} 15:59:59','%Y-%m-%d %H:%i:%S') 
    ) 
    GROUP BY user_id
  ) AS s
"""

output='s3://respiree-dynamodbdata-sg'

# dest_bucket = boto3.resource('s3', region_name='us-east-1').Bucket('mgh-patient-daily-usage-output')
dest_table = boto3.resource('dynamodb', region_name='ap-southeast-1').Table('sgdev-patient-daily-usage')

def lambda_handler(event, context):
    client = boto3.client('athena')
    # Execution
    execution = client.start_query_execution(
        QueryString=query,
        QueryExecutionContext={
            'Catalog':'azprod-dataprocessing-dynamodb',
            'Database': 'default'
        },
        ResultConfiguration={
            'OutputLocation': output,
        }
    )
    print(execution)
    queryId = execution["QueryExecutionId"]
    state = 'RUNNING'
    max_execution = 1000
    while(max_execution > 0 and state in ['RUNNING', 'QUEUED']):
        max_execution = max_execution - 1
        response = client.get_query_execution(QueryExecutionId = queryId)
        print(response)
        if 'QueryExecution' in response and 'Status' in response['QueryExecution'] and 'State' in response['QueryExecution']['Status']:
            state = response['QueryExecution']['Status']['State']
            if state == 'FAILED':
                print (state)
            if state == 'SUCCEEDED':
                print (state)
        time.sleep(1)     
    response = client.get_query_execution(QueryExecutionId = queryId)
    #state = response['QueryExecution']['Status']['StateChangeReason']
    print('response', state)
    results = client.get_query_results(QueryExecutionId = queryId)
    print('results', results['ResultSet']['Rows'][1:])

    
    columns = [
      col['Label']
      for col in results['ResultSet']['ResultSetMetadata']['ColumnInfo']
    ]
    data_rows = []
    
    for result in results['ResultSet']['Rows'][1:]:
        values = []
        for field in result['Data']:
          try:
            values.append(list(field.values())[0]) 
           
          except:
            values.append(list(' '))
        dest_table.put_item(Item=dict(zip(columns, values)))
        print(dict(zip(columns, values)))
    print(assess_day)


    return {
        'statusCode': 200,
        'body': json.dumps(results)
    }    
