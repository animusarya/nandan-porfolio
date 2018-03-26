import React from 'react';
import Helmet from 'react-helmet';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

const allCarsQuery = gql`
  {
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

class Cars extends React.Component {
  render() {

    const handleCarAdded = () => {
      alert('Car created successfully!'); // eslint-disable-line
    }

    const onCarUpdate =(cache, { data: { createCar } }) => {
      const data = cache.readQuery({ query: allCarsQuery });
      data.allCars.push(createCar);
      cache.writeQuery({ query: allCarsQuery, data });
    };

    return (
      <section className="section">
        <Helmet title="Cars" />
        <div className="container">
          <h1 className="title">
            Cars from Graph.cool
          </h1>
          <ul>
            <Query query={allCarsQuery}>
              {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              return data.allCars.map(car => <li key={car.id}>{car.title}</li>)
            }}
            </Query>
          </ul>
          <br />
          <Mutation
            mutation={createCarMutation}
            variables={{ title: 'bmw' }}
            update={onCarUpdate}
            onCompleted={handleCarAdded}
          >
            {(createCar, { loading, error, data }) => (
              <div>
                <button className="button is-primary" onClick={createCar}>
                Create car
                </button>
                {data && <p>Car created successfully!</p>}
                {loading && <p>Loading...</p>}
                {error && <p>Error :( Please try again</p>}
              </div>
            )}
          </Mutation>
        </div>
      </section>
    );
  }
}

export default Cars;
