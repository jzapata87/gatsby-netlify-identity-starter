import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '@common/Layout';
import { Heading, Box, Flex, Card } from 'rebass';

const Services = (props) => {
  const services = props.data.allMarkdownRemark.edges;
  return (
    <>

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
            Services
            </Heading>
      </Box>
      <Flex flexWrap="wrap">
          {services.map(edge => (
            <Card m={4} width={[1, 2/5, 1/4]} sx={{borderStyle: "solid"}}>
              <h2>
                <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
              </h2>
              <p>{edge.node.excerpt}</p>
            </Card>
          ))}
      </Flex>

    </>
  );
};

export const query = graphql`
  query ServicesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default Services;
