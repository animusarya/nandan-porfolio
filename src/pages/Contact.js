import React from 'react';
import Helmet from 'react-helmet';

import ContactForm from '../components/ContactForm';

export default () => (
  <section className="section">
    <Helmet title="Contact" />
    <div className="container">
      <h1 className="title">
        Contact
      </h1>
      <ContactForm />
    </div>
  </section>
);
