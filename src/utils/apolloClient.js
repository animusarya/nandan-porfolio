import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import config from './config';

const client = new ApolloClient({
  link: new HttpLink({ uri: config.graphQlUri }),
  cache: new InMemoryCache()
});

export default client;
