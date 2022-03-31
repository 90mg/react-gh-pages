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
  const year = event.pathParameters.year;
  const all_makes = [
   {'Id': 1, 'Name': "Acura" },
   {'Id': 8, 'Name': "Audi" },
   {'Id': 15, 'Name': "BMW" },
   {'Id': 17, 'Name': "Buick" },
   {'Id': 18, 'Name': "Cadillac" },
   {'Id': 20, 'Name': "Chevrolet" },
   {'Id': 33, 'Name': "Ford" },
   {'Id': 48, 'Name': "Jaguar" },
   {'Id': 49, 'Name': "Jeep" }
  ];
  const response = {
      statusCode: 200,
  //  Uncomment below to enable CORS requests
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      }, 
      body: JSON.stringify(all_makes),
  };
  return response;
};
