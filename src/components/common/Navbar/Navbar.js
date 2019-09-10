import React from 'react';
import Headroom from 'react-headroom';
import { Flex, Image, Box, Text, Link } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Link as GLink } from 'gatsby';

const links = ['About', "Services", "Team", "Blog"];

const HeaderContainer = styled(Headroom)`

  .headroom--pinned {
    background-color: rgb(139, 216, 237);
  }
  position: absolute;
  width: 100%;
  z-index: 20;
`;



function Navbar() {

  return (<HeaderContainer>
    <Fade top>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <Text p={2} fontWeight='bold'>Rebass</Text>
        <Box mx='auto' />
        <Box>{links.map((name) => {

            return <GLink to={"/services"}><Link mx={2}>{name}</Link></GLink>;
        }
      )}</Box>
      </Flex>
    </Fade>
  </HeaderContainer>);
}


export default Navbar;
