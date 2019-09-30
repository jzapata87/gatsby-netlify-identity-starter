import React from 'react';
import { Form, withFormik, FastField, ErrorMessage, Field, Formik } from 'formik'
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
  message: Yup.string()
    .min(50, 'Please write a more detailed description')
    .required('Required'),
});

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Line = styled('hr')`
  border-width: 1px;
  margin: 4px 0px;
  border-color: black;
`;

const Input = styled.input`
  border-width: 1px;
  border-color: black;
`;

export const ValidationSchemaExample = () => (
  <div>
    <h1>Contact Us</h1>
    <Line/>
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
            ...values,
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
          <Field name="firstName" style={{ borderStyle: 'solid', borderRadius: '5px' }}/>
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <label htmlFor="email" style={{ display: 'block' }}>
            Last Name
          </label>
          <Field name="lastName" style={{ borderStyle: 'solid', borderRadius: '5px' }}/>
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <label htmlFor="email" style={{ display: 'block' }}>
            Email
          </label>
          <Field name="email" type="email" style={{ borderStyle: 'solid', borderRadius: '5px' }}/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <label htmlFor="message" style={{ display: 'block' }}>
            Message
          </label>
          <Field name="message" component="textarea" rows='4' style={{ borderStyle: 'solid', borderRadius: '5px' }}/>
          {errors.message && touched.message ? <div>{errors.message}</div> : null}
          <button style={{ display: 'block' }} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
