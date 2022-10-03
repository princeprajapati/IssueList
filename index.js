const express = require("express");

// this is the graphQl code
const {ApolloServer} = require('apollo-server-express');
const Issue = require("./models/issues");

const typeDefs = `
 type issue {
  id: String!
  status: String!
  ttile: String!
  effort: String
  due: String
  created: String
  owner: String
 }  
  type Query {
    about: String!
  }
  type Mutation {
   setAboutMessage(message: String!): String
  }
`;

// const tempIssues = [
//   {
//     id: 1,
//     owner: "Person-A",
//     created: new Date("2022-09-19"),
//     due: new Date("2022-09-25"),
//     status: "Assigned",
//     title: "This is the First issue",
//     effort: 10
//   },
//   {
//     id: 2,
//     owner: "Person-B",
//     created: new Date("2022-09-17"),
//     due: new Date("2022-09-22"),
//     status: "Resolved",
//     title: "This is the Second issue",
//     effort: 20
//   },
// ];
// function issueList(){
//   return tempIssues;
// }

let aboutMessage = "Hello I am just a variable";

const resolvers = {
   Query: {
        about: () => aboutMessage,
        issueList
    },
   Mutation: {
        setAboutMessage,
   },
  };

async function issueList(){
    return await Issue.find({});
    // return tempIssues;
  }


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
