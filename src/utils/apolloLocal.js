import { withClientState } from "apollo-link-state";
import { InMemoryCache } from "apollo-cache-inmemory";

const inMemoryCache = new InMemoryCache();

const stateLink = withClientState({
  inMemoryCache,
  resolvers: {
    Mutation: {}
  },
  defaults: {
    counter: {
      __typename: "Counter",
      value: 1
    }
  }
});

export default stateLink;
