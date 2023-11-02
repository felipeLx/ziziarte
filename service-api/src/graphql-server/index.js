const importSync = require("import-sync");
const createContext = importSync("./create-context");
const resolvers = importSync("./resolvers");
const typeDefs = importSync("./type-defs");

module.exports = function createGraphqlServerConfig({
  apiPathPrefix = "",
  refreshUserToken,
  normaliseRequest,
}) {
  const context = createContext({
    apiPathPrefix,
    refreshUserToken,
    normaliseRequest,
  });

  return {
    context,
    resolvers,
    typeDefs,
    introspection: true,
    playground: {
      endpoint: context.publicHost,
      settings: {
        "request.credentials": "include",
      },
    },
    // Disable subscriptions (not currently supported with ApolloGateway)
    subscriptions: false,
  };
};
