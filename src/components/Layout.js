import React from 'react';
import Helmet from 'react-helmet';

import Header from './Header';
import config from '../utils/config';

export default ({ children}) => (
  <div>
    <Helmet title={config.siteName} />
    <Header />
    {children}
  </div>
);
