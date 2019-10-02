import React, { Fragment } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Text, Heading } from 'rebass';
import Carousel from 'react-bootstrap/Carousel';

const TEAM = [
  {
    name: 'img1',
    image: 'img1.jpg',
  },
  {
    name: 'img1',
    image: 'img2.jpg',
  },
  {
    name: 'img3',
    image: 'img3.jpg',
  },
];

const Relative = styled(Heading)`
  position: relative;
`;

const StyledImage = styled(Img)`
  height: 75vh;
`;

const Heading1 = styled(Heading)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Slider = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "pictures" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Carousel controls="false">
        {data.allFile.edges.map(pic => (
          <Carousel.Item key={pic.relativePath}>
            <StyledImage fluid={pic.node.childImageSharp.fluid} />
          </Carousel.Item>
        ))}
      </Carousel>
    )}
  />
);

export default Slider;
