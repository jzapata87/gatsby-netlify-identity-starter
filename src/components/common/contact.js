import React from 'react';
import { Form, withFormik, FastField, ErrorMessage, Field, Formik } from 'formik'
import { navigate } from 'gatsby-link';
import * as Yup from 'yup';
import styled from 'styled-components';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
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
    <h1>Newsletter</h1>
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
            'form-name': 'newsletter',
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
        <Form data-netlify="true" method="POST" name="newsletter" action="/team">
          <Field placeholder='Email' name="email" type="email" style={{ borderStyle: 'solid', borderRadius: '5px', padding: '4px' }}/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button style={{ borderWidth: '2px', display: 'block', marginTop: '4px', borderStyle: 'solid', borderRadius: '5px', padding: '4px' }} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
