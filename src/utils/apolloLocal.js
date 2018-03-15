import { withClientState } from "apollo-link-state";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";

const inMemoryCache = new InMemoryCache();

const stateLink = withClientState({
  inMemoryCache,
  resolvers: {
    Mutation: {
      incrementCounter: (_, args, { cache }) => {
        const { counter } = cache.readQuery({
          query: gql`
            {
              counter {
                value
              }
            }
          `
        });

        const data = {
          counter: {
            __typename: "Counter",
            value: counter.value + 1
          }
        };

        cache.writeData({ data });

        return null;
      }
    }
  },
  defaults: {
    counter: {
      __typename: "Counter",
      value: 1
    }
  }
});

export default stateLink;
