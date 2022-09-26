const express = require("express");

// this is the graphQl code
const {ApolloServer} = require('apollo-server-express')

const typeDefs = `
  type Query {
    about: String!
  }
  type Mutation {
   setAboutMessage(message: String!): String
  }
`;

let aboutMessage = "Hello I am just a variable";
const resolvers = {
   Query: {
        about: () => aboutMessage,
    },
   Mutation: {
        setAboutMessage,
   },
  };

function setAboutMessage(_, { message }) {
      return aboutMessage = message;
    }

const server = new ApolloServer({
        typeDefs,
        resolvers,
      });
  
// this is the graphQl code

const app = express();
const PORT = 3000;

app.use(express.static("./public"));

server.start().then(()=>{
  server.applyMiddleware({ app, path: '/graphql', cors: true });
});

app.get("/", (req, res) => {
  res.render("./index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
