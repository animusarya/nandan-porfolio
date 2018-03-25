import React from 'react';
import Helmet from 'react-helmet';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const counterQuery = gql`
  {
    counter @client {
      value
    }
  }
`;

const Counter = () => (
  <section className="section">
    <Helmet title="Home" />
    <div className="container">
      <h1 className="title">Counter</h1>
      <Query query={counterQuery}>
        {({ data, client }) => (
          <div>
            <p>
              {data && data.counter && `🐑 Counter: ${data.counter.value}`}
            </p>
            <button
              onClick={() => client.writeData({ data: { counter: {__typename: "Counter", value: data.counter.value+1 } } })}
            >
               Increment
            </button>
          </div>
          )}
      </Query>
    </div>
  </section>
);

export default Counter;
