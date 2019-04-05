var express = require('express');
var graphqlHTTP = require('express-graphql');
const todoShema = require('./schema')
const cors =  require('cors');


var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: todoShema,  
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');