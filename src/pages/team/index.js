import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '@common/Layout';
import { Heading, Box, Flex, Card, Image, Text } from 'rebass';
import Navbar from '@common/Navbar';

const Team = (props) => {
  const team = props.data.allMarkdownRemark.edges;
  return (
    <>
      <Navbar />

        <Box
          sx={{
          px: 4,
          py: 6,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/random/1024x768?sky)',
          backgroundSize: 'cover',
          color: 'white',
          bg: 'gray',
          }}>
            <Heading
            textAlign='center'
            fontSize={[ 5, 6 ]}>
            Team
            </Heading>
      </Box>
      <Flex flexWrap="wrap">

        <Card width={[ 256, 320 ]} mx='auto' p={2}>
          <Heading >Principle</Heading>
          <Image
            sx={{
              borderRadius: 5,
            }}
            src='https://source.unsplash.com/random/512x384?space'
          />
          <Heading as={"h2"}>Carlos Cascos</Heading>
          <Text>Et Aeneae, nivosos magos, donata in quod cum [terris](#loco-aris), cumque solum,
          manibus auro moenibus glaebas. Manus incaluere. Nunc audiat teneat dextra,
          finivit cui male venit moves! Senior et niger tepido parenti fuit, in ponit
          spectemur et opto speret. Ferum Neptunus tergore.</Text>
        </Card>



      </Flex>
      <Flex flexWrap="wrap">
          {team.map(edge => (

              <Card width={[ 256, 320 ]} mx='auto' p={2}>
                <Image
                  sx={{
                    borderRadius: 5,
                  }}
                  src={edge.node.frontmatter.image}
                />
                <Heading>{edge.node.frontmatter.title}</Heading>
                <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
              </Card>

          ))}
      </Flex>

    </>
  );
};

export const query = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            image
            jobtitle
            linkedinurl
            email
          }
        }
      }
    }
  }
`;

export default Team;
