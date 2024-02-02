import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { tokenGetterToLocalStorage } from "@/helpers/token-getter-to-local-storage";

const httpLink = createHttpLink({
  uri: "https://inctagram.work/api/v1/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = tokenGetterToLocalStorage();

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
