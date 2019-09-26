import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Box } from 'rebass';
import Navbar from '@common/Navbar';
import Layout from '@common/Layout';

const Service = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout>
      <Box
        sx={{
          px: 4,
          py: 6,
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/random/1024x768?sky)',
          backgroundSize: 'cover',
          color: 'white',
          bg: 'gray',
        }}
      >
        <Heading textAlign="center" fontSize={[5, 6]}>
          {title}
        </Heading>
      </Box>

      <div className="strip strip-white strip-diagonal">
        <div className="container pt-4 pt-md-10">
          <div className="row justify-content-start">
            <div className="col-12 col-md-8">
              <div className="service service-single">
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
      }
      html
    }
  }
`;

export default Service;
