import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { tokenGetterToSessionStorage } from "@/helpers";

const httpLink = createHttpLink({
  // uri: "https://inctagram.work/api/v1/graphql",
  uri: process.env.NEXT_PUBLIC_GRAPH_QL_LINK,
});
const authLink = setContext((_, { headers }) => {
  const token = tokenGetterToSessionStorage();

  return {
    headers: {
      ...headers,
      authorization: token ? `Basic ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache({ addTypename: false }),
  link: authLink.concat(httpLink),
});
