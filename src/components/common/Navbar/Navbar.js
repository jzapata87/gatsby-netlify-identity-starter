import React from 'react';
import Headroom from 'react-headroom';
import { Flex, Image, Box, Text, Link } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Link as GLink } from 'gatsby';
import Logo from '../../Logo/asset.svg';

const links = ['About', "Services", "Team", "Blog"];

const HeaderContainer = styled(Headroom)`

  .headroom--pinned {
    background-color: rgb(139, 216, 237);
  }
  position: absolute;
  width: 100%;
  z-index: 20;
`;

const LinkText = styled(Text)`
  font-weight: bold;
  display: inline-block;
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
        <Image src={Logo} width='50px' p={2} fontWeight='bold'/>
        <Box mx='auto' />
        <Box>{links.map((name) => {

            return <GLink to={"/services"}><LinkText mx={2}>{name}</LinkText></GLink>;
        }
      )}</Box>
      </Flex>
    </Fade>
  </HeaderContainer>);
}


export default Navbar;
