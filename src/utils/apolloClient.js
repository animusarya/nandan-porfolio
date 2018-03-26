import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from "apollo-link";

import config from './config';
import apolloLocal from './apolloLocal';

const httpLink = createHttpLink({
  uri: config.debug ? config.graphQlUriDev : config.graphQlUri,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(ApolloLink.from([apolloLocal, httpLink])),
  cache: new InMemoryCache(),
  connectToDevTools: config.debug,
});

export default client;
