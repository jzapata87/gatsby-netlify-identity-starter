import React from 'react';
import { Formik, Form, Field } from 'formik';
import { navigate } from 'gatsby-link';
import * as Yup from 'yup';
import styled from 'styled-components';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
          }),
        })
          .then(() => {
            alert('Success!');
            setSubmitting(false);
          })
          .catch(error => alert(error));
      }}
    >
      {({ errors, touched }) => (
        <Form data-netlify="true" method="POST" name="contact" action="/team">
          <label htmlFor="email" style={{ display: 'block' }}>
            First Name
          </label>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <label htmlFor="email" style={{ display: 'block' }}>
            Last Name
          </label>
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <label htmlFor="email" style={{ display: 'block' }}>
            Email
          </label>
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button style={{ display: 'block' }} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
