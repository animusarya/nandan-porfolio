import React from 'react';
import Helmet from 'react-helmet';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const IncrementButton = graphql(gql`
  mutation incrementCounter {
    incrementCounter @client
  }
`)(
  class extends React.Component {
    onIncrementPressed = () => {
      this.props.mutate({});
    };

    render() {
      return <button type="button" onClick={this.onIncrementPressed}>Increment</button>;
    }
  }
);

const Counter = ({ data }) => (
  <section className="section">
    <Helmet title="Home" />
    <div className="container">
      <h1 className="title">Counter</h1>
      <p>
        {data.counter && `🐑 Counter: ${data.counter.value}`}
      </p>
      <IncrementButton />
    </div>
  </section>
);

export default graphql(gql`
{
  counter @client {
    value
  }
}
`)(Counter);
