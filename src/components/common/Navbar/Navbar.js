import React from 'react';
import Headroom from 'react-headroom';
import { Flex, Image, Box, Text, Link } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Link as GLink } from 'gatsby';
import Logo from '../../Logo/asset.svg';

const links = [
  { page: 'About', link: '/about' },
  { page: 'Services', link: '/services' },
  { page: 'Team', link: '/team' },
  { page: 'Blog', link: '/services' },
];

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
  return (
    <HeaderContainer>
      <Fade top>
        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          p={3}
        >
          <GLink to={'/'}>
            {' '}
            <Image src={Logo} width="50px" p={2} fontWeight="bold" />
          </GLink>
          <Box mx="auto" />
          <Box>
            {links.map(obj => {
              return (
                <GLink to={obj.link}>
                  <LinkText color={'black'} mx={2}>
                    {obj.page}
                  </LinkText>
                </GLink>
              );
            })}
          </Box>
        </Flex>
      </Fade>
    </HeaderContainer>
  );
}

export default Navbar;
