import React from 'react';
import Helmet from 'react-helmet';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

class Cars extends React.Component {
  render() {
    const { data, createCar } = this.props;

    if (data.loading) {
      return <p>loading...</p>;
    }

    return (
      <section className="section">
        <Helmet title="About" />
        <div className="container">
          <h1 className="title">
            Cars from Graph.cool
          </h1>
          <button className="button is-primary" onClick={() => createCar({ title: 'bmw' })}>Create car</button>
          <ul>{data.allCars.map(car => <li key={car.id}>{car.title}</li>)}</ul>
        </div>
      </section>
    );
  }
}

const query = gql`
  query CarsListQuery {
    allCars {
      id
      title
    }
  }
`;

const createCarMutation = gql`
  mutation createCar($title: String!) {
    createCar(title: $title) {
      id
      title
    }
  }
`;

export default compose(
  graphql(query),
  graphql(createCarMutation, {
    name: 'createCar',
    options: {
      update: (proxy, { data: { createCar } }) => {
        const data = proxy.readQuery({ query });
        data.allCars.push(createCar);
        proxy.writeQuery({ query, data });
      },
    },
    props: ({ createCar }) => ({
      createCar: input => {
        createCar({
          variables: input,
        })
          .then(result => {
            console.log('result', result); // eslint-disable-line
            alert('Car created successfully!'); // eslint-disable-line
          })
          .catch(error => {
            console.log('error', error); // eslint-disable-line
          });
      },
    }),
  }),
)(Cars);
