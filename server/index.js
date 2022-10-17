const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return req.headers;
  },
});

server.listen().then(({ url }) => {
  console.log("YOUR API IS RUNNING AT: " + url);
});
