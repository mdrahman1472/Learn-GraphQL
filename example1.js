const express = require('express');
const expressGraphQL = require('express-graphql');
const {
   GraphQLSchema,
   GraphQLObjectType,
   GraphQLString
} = require('graphql');

const app = express();

const schema = new GraphQLSchema ({
   query: new GraphQLObjectType({
      name: 'HelloWorld',
      fields: () => ({ // fileds that hello world returns
         message: { // is object
            type: GraphQLString, // HelloWorld object has message object and that is string type
            resolve: () => 'Hello World', // message as function which tell grphql where to get message
         }
      })
   })
})
app.use('/graphql', expressGraphQL({
   schema: schema, // passing above's defined schema obey here
   graphiql: true
}));
app.listen(5000, () => console.log('Server Running'));