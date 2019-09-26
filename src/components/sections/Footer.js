import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Text, Heading, Button, Flex } from 'rebass';
import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import { ValidationSchemaExample } from '@common/contact';

import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/ajayns/gatsby-absurd',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/ajay_ns',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/ajayns08',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <BoxFooter>
        <BoxFooterDetail m={3}>
          <Box borderBottom="5px solid black">
            <BoxFooterDetailTitle fontSize={[5,5,5]}>Location</BoxFooterDetailTitle>
          </Box>
          <Text>765 East 7th Street</Text>
          <Text>Brownsville, Texas 78520</Text>
          <Text>956-544-7778</Text>
        </BoxFooterDetail>
        <BoxFooterDetail m={3}>
          <Box mb={1} borderBottom="5px solid black">
            <BoxFooterDetailTitle fontSize={[5,5,5]}>Connect</BoxFooterDetailTitle>
          </Box>
          <SocialIcons>
            <img src={InstagramIcon} alt="link" />
            <img src={TwitterIcon} alt="link" />
            <img src={TwitterIcon} alt="link" />
            <img src={TwitterIcon} alt="link" />
          </SocialIcons>
        </BoxFooterDetail>
        <BoxFooterDetail m={3}>
          <ValidationSchemaExample />
        </BoxFooterDetail>
      </BoxFooter>
    )}
  />
);

const BoxFooter = styled(Flex)`
  min-height: 50vh;
  justify-content: space-evenly;
  align-content: center;



  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    align-items: center;

  }
`;

const BoxFooterDetailTitle = styled(Text)`
  border-bottom: 2px solid black;
`;

const BoxFooterDetail = styled('div')`
  min-width: 35vh;
  margin: 2vh;
`;

const SocialIcons = styled.div`


  img {
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 10px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
