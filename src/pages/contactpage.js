import React from 'react';
import styled from 'styled-components';
import Layout from '@common/Layout';
import { Box, Text, Heading, Flex } from 'rebass';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';
import NewHeader from '@sections/NewHeader';
import { ValidationSchemaExample } from '@common/contactform';



const IndexPage = () => (
  <Layout>
    <NewHeader title={'Contact Us'}/>
    <ValidationSchemaExample/>
  </Layout>
);

export default IndexPage;
