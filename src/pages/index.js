import React from 'react';
import styled from 'styled-components';
import Layout from '@common/Layout';
import {
  Box,
  Text,
  Heading,
  Flex
} from 'rebass'
// import Navbar from '@common/Navbar';
//
// import Header from '@sections/Header';
import About from '@sections/About';
import About2 from '@sections/About2';
// import Brands from '@sections/Brands';
// import Team from '@sections/Team';
// import Faq from '@sections/Faq';
// import Footer from '@sections/Footer';
import Slider from '@sections/Slider';
import NewHeader from '@sections/NewHeader';

const Heading1 = styled(Heading)`
  ${'' /* position: absolute; */}
  color: black;
  ${'' /* top: 0; left: 0; bottom: 0; right: 0; */}
  ${'' /* margin: auto; */}

  text-shadow: 2px 2px 2px white;

`;

const AbBox = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  ${'' /* left: 50%;
  transform: translate(-50%, 0); */}
  z-index: 5;
`;

const IndexPage = () => (
  <Layout>

    <NewHeader/>
    <About />
    <About2 />

  </Layout>
);

export default IndexPage;

{/* <Navbar />
<Header />
<About />
<Brands />
<Team />
<Faq />
<Footer /> */}
