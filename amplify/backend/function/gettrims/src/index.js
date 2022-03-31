const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 exports.handler = async (event) => {
  console.log(event)
  const model = event.pathParameters.model;
  //Selected model: Ford Explorer
  const all_trims = [
   {'Id': 497, 'Name': "Base", 'FuelTypeId': 6, 'FuelType': "Gas", 'DisplayName': "Base", 'BodyStyleId': "10" },
   {'Id': 685, 'Name': "Limited", 'FuelTypeId': 1, 'FuelType': "Gas Hybrid", 'DisplayName': "Limited (Gas Hybrid)", 'BodyStyleId': "10" },
   {'Id': 685, 'Name': "Limited", 'FuelTypeId': 6, 'FuelType': "Gas", 'DisplayName': "Limited (Gas)", 'BodyStyleId': "10" },
   {'Id': 732, 'Name': "Platinum", 'FuelTypeId': 6, 'FuelType': "Gas", 'DisplayName': "Platinum", 'BodyStyleId': "10" },
   {'Id': 1961, 'Name': "Police Interceptor", 'FuelTypeId': 1, 'FuelType': "Gas Hybrid", 'DisplayName': "Police Interceptor (Gas Hybrid)", 'BodyStyleId': "10" },
   {'Id': 1961, 'Name': "Police Interceptor", 'FuelTypeId': 6, 'FuelType': "Gas", 'DisplayName': "Police Interceptor", 'BodyStyleId': "10" },
   {'Id': 2047, 'Name': "ST", 'FuelTypeId': 6, 'FuelType': "Gas", 'DisplayName': "ST", 'BodyStyleId': "10" },
   {'Id': 1550, 'Name': "XLT", 'FuelTypeId': 6, 'FuelType': "Gas", 'DisplayName': "XLT", 'BodyStyleId': "10" },
  ];
  const response = {
      statusCode: 200,
  //  Uncomment below to enable CORS requests
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      }, 
      body: JSON.stringify(all_trims),
  };
  return response;
};
