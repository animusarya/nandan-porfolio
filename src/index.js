import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import theme from './utils/theme';
import apolloClient from './utils/apolloClient';
import registerServiceWorker from './utils/registerServiceWorker';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cars from './pages/Cars';
import Counter from './pages/Counter';

// For private routes
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       localStorage.getItem('token') ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/login",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );

const App = () => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/cars" component={Cars} />
          <Route path="/counter" component={Counter} />
        </Layout>
      </Router>
    </ThemeProvider>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
