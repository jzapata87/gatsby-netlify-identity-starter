import React, { useState } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image, Box, Text, Link } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Link as GLink } from 'gatsby';
import Logo from '../../Logo/asset.svg';
import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const links = [
  { page: 'Home', link: '/' },
  { page: 'Services', link: '/services' },
  { page: 'Team', link: '/team' },
  { page: 'Contact Us', link: '/contactpage' },
];

const Mobile = styled.div`
  display: none;
  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
  ${props =>
    props.hide &&
    `
    display: block;
    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`;

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

const NavContainer = styled(Flex)`
  max-width: 90%;


  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1201px;
  }
`;

const MobileMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

`;

function Navbar() {

  const [hidden, setHidden] = useState(false);


  return (
    <HeaderContainer>
      <Fade top>
        <NavContainer
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          p={3}
          mx='auto'
        >
          <GLink to={'/'}>
            {' '}
            <Image src={Logo} width="50px" p={2} fontWeight="bold" />
          </GLink>
          <Box mx="auto" />
          <Mobile>
            <button onClick={() => setHidden((prevState =>! prevState))}>
                <MenuIcon/>
            </button>
          </Mobile>
          {console.log(hidden)}
          <Mobile hide>
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
          </Mobile>
        </NavContainer>
        <Mobile>
          {hidden &&<MobileMenu>
            {links.map(obj => {
              return (
                <GLink to={obj.link}>
                  <LinkText color={'black'} mx={2}>
                    <button onClick={() => setHidden(false)}>
                        {obj.page}
                    </button>
                  </LinkText>
                </GLink>
              );
            })}
          </MobileMenu>}
        </Mobile>
      </Fade>
    </HeaderContainer>
  );
}

export default Navbar;
