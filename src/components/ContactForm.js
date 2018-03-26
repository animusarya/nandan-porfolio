import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { withFormik } from 'formik';
import Yup from 'yup';

const ContactForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Full name</label>
        <div className="control">
          <input
            className="input"
            name="name"
            placeholder="Full Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && <p className="help is-danger">{errors.name}</p>}
        </div>
      </div>
      <div className="field">
        <label className="label">Your Email</label>
        <div className="control">
          <input
            className="input"
            name="email"
            placeholder="Your Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && <p className="help is-danger">{errors.email}</p>}
        </div>
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            className="textarea"
            name="message"
            placeholder="Enter your message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && touched.message && <p className="help is-danger">{errors.message}</p>}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-link" disabled={isSubmitting}>Submit</button>
        </div>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const ContactFormFormik = withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Full name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    message: Yup.string().required('Message is required!'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    // console.log('handle submit', values, props);
    props.addContact(values);
    setSubmitting(false);
  },
  displayName: 'ContactUs', // helps with React DevTools
})(ContactForm);

const addContactMutation = gql`
  mutation addContactMutation($name: String, $email: String, $message: String) {
    addContact(input: { name: $name, email: $email, message: $message }) {
      id
      name
      email
      message
    }
  }
`;

export default compose( // eslint-disable-line
  graphql(addContactMutation, {
    name: 'addContact',
    props: ({ addContact }) => ({
      addContact: contactInput => {
        addContact({
          variables: contactInput,
        })
          .then(result => {
            console.log('result', result);
            alert('Contact form sent successfully');
          })
          .catch(error => {
            console.log('error', error);
            alert(error);
          });
      },
    }),
  }),  // eslint-disable-line
)(ContactFormFormik); // eslint-disable-line