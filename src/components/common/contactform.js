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
  organization: Yup.string()
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


const FormStyled = styled(Form)`
  display: grid;
  border-width: 1px;
  border-color: black;
  margin: 128px auto;
  grid-template-rows: auto;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  max-width: 90%;

  .fname {
  grid-area: firstname;
  }

  .lname {
  grid-area: lastname;
  }

  .org {
  grid-area: org;
  }

  .email {
  grid-area: email;
  }

  .message {
  grid-area: message;
  }

  .submit {
  grid-area: submit;
  justify-self: start;
  }

  .requiredfname {
    grid-area: reqfname;
  }

  .requiredlname {
    grid-area: reqlname;
  }

  .requiredemail {
    grid-area: reqemail;
  }

  .requiredorg {
    grid-area: reqorg;
  }

  .requiredmessage {
    grid-area: reqmes;
  }

  .contactmess  {
    grid-area: contactmess;
    text-align: center;
    margin-bottom: 16px;
  }

  grid-template-areas:
    "contactmess"
    "firstname"
    "reqfname"
    "lastname"
    "reqlname"
    "email"
    "reqemail"
    "org"
    "reqorg"
    "message"
    "reqmes"
    "submit";

  @media (min-width: ${props => props.theme.screen.xs}) {
    grid-template-areas:
      "contactmess"
      "firstname"
      "reqfname"
      "lastname"
      "reqlname"
      "email"
      "reqemail"
      "org"
      "reqorg"
      "message"
      "reqmes"
      "submit";
    max-width: 569px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    grid-template-areas:
      "contactmess"
      "firstname"
      "reqfname"
      "lastname"
      "reqlname"
      "email"
      "reqemail"
      "org"
      "reqorg"
      "message"
      "reqmes"
      "submit";
    max-width: 569px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    grid-template-areas:
      "contactmess contactmess"
      "firstname lastname"
      "reqfname reqlname"
      "email org"
      "reqemail reqorg"
      "message message"
      "reqmes ."
      "submit .";
    max-width: 593px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-template-areas:
      "contactmess contactmess"
      "firstname lastname"
      "reqfname reqlname"
      "email org"
      "reqemail reqorg"
      "message message"
      "reqmes ."
      "submit .";
    max-width: 700px;
  }
`;

const Input = styled(Field)`
  width: 100%;


  @media (min-width: ${props => props.theme.screen.xs}) {


  }

  @media (min-width: ${props => props.theme.screen.sm}) {

  }

  @media (min-width: ${props => props.theme.screen.md}) {

  }

  @media (min-width: ${props => props.theme.screen.lg}) {

  }

`;

const InputContainer = styled.div`
  margin: 16px auto;
`;

const MessageContainer = styled.div`

`;

export const ValidationSchemaExample = () => (
  <div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        organization: '',
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
      {({ errors, touched, isSubmitting }) => (
        <FormStyled data-netlify="true" method="POST" name="contact" action="/team">
          <h2 className='contactmess'>Please feel free to send us a message.  We will get back with you within 1 day.</h2>
          <Input className='fname' placeholder={"First Name"} name="firstName" style={{ borderStyle: 'solid', borderRadius: '5px' }}/>
          {errors.firstName && touched.firstName ? (
            <div className='requiredfname'>{errors.firstName}</div>
          ) : null}
          <Input className='lname' placeholder={"Last Name"} name="lastName" style={{ borderStyle: 'solid', borderRadius: '5px' }}/>
          {errors.lastName && touched.lastName ? (
            <div className='requiredlname'>{errors.lastName}</div>
          ) : null}
          <Input className='org' placeholder={"Organization"} name="organization" type="organization" style={{ borderStyle: 'solid', borderRadius: '5px' }}/>
          {errors.organization && touched.organization ? <div className='requiredorg'>{errors.organization}</div> : null}
          <Input className='email' placeholder={"Email"} name="email" type="email" style={{ borderStyle: 'solid', borderRadius: '5px' }}/>
          {errors.email && touched.email ? <div className='requiredemail'>{errors.email}</div> : null}


          <Input className='message' placeholder={"Message"} name="message" component="textarea" rows='4' style={{ borderWidth: '2px', borderStyle: 'solid', borderRadius: '5px' }}/>
          {errors.message && touched.message ? <div className='requiredmessage'>{errors.message}</div> : null}

          <button className='submit' disabled={isSubmitting} style={{ display: 'block', borderStyle: 'solid', borderWidth: '2px', borderRadius: '5px', padding: '4px' }} type="submit">
            Submit
          </button>
        </FormStyled>
      )}
    </Formik>
  </div>
);
