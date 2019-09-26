import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import { Box, Text, Heading, Button } from 'rebass';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <h1>Foward Looking Firm</h1>
          <Grid>
            <Fade bottom>
              <div>
                <h2>Technology</h2>
                <p>
                  Here at Cascos & Associates, know that innovation is the key to remain a
                  competitive business.  Technology has the power to not only help our business
                  increase efficiency and productivity but to also help produce the results our
                  clients demand of us.  We strive to integrade industry leading technology to
                  produce an amazing product.  This is what sets us apart from other firms in the area.
                </p>
              </div>
            </Fade>

            <Art>
              <Fade right>
                <Img fluid={data.art_fast.childImageSharp.fluid} />
              </Fade>
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Fade left>
                <Img fluid={data.art_learn.childImageSharp.fluid} />
              </Fade>
            </Art>
            <Fade bottom>
              <div>
                <h2>People</h2>
                <p>
                  Our firm is not possible without our dedicated professionsal who work deligently to serve our clients.
                  We take great pride in keeping up with accouting/tax standards.  We guarentee that our employees
                  will utilize their knowledge to get the job done.
                </p>
                <Link to="/team"><Button my={2} backgroundColor="rgb(139, 216, 237)" color="black">Meet the Team</Button></Link>
              </div>
            </Fade>
          </Grid>
          <Grid>
            <Fade bottom>
              <div>
                <h2>Client-oriented</h2>
                <p>
                  We know people are the bedrock of any business.  Our commitment to providing
                  audit, accouting and business services while stregthening client relationships is at the forefront of our firm.
                  We make it a point to work with our clients in any unforseem circumstances.  We will
                  be known as a firm that puts clients first.

                </p>
              </div>
            </Fade>
            <Art>
              <Fade right>
                <Img fluid={data.art_ideas.childImageSharp.fluid} />
              </Fade>
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
