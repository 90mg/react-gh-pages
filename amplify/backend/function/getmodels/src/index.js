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
  const make = event.pathParameters.make;
  //Selected make: Ford
  const all_models = [
   {'Id': 457, 'Name': "Escape", 'BodyTypeId': 20, 'BodyType': "SUV", 'Doors': "4", 'DisplayName': "Escape" },
   {'Id': 473, 'Name': "Expedition", 'BodyTypeId': 20, 'BodyType': "SUV", 'Doors': "4", 'DisplayName': "Expedition" },
   {'Id': 474, 'Name': "Explorer", 'BodyTypeId': 20, 'BodyType': "SUV", 'Doors': "4", 'DisplayName': "Explorer" },
   {'Id': 555, 'Name': "Fusion", 'BodyTypeId': 18, 'BodyType': "Sedan", 'Doors': "4", 'DisplayName': "Fusion" },
   {'Id': 811, 'Name': "Mustang", 'BodyTypeId': 20, 'BodyType': "SUV", 'Doors': "4", 'DisplayName': "Mustang Convertible" }
  ];
  const response = {
      statusCode: 200,
  //  Uncomment below to enable CORS requests
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      }, 
      body: JSON.stringify(all_models),
  };
  return response;
};

