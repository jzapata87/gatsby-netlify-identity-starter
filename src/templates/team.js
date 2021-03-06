import React from 'react';
import { graphql } from 'gatsby';

const Team = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <div className="strip strip-white strip-diagonal">
      <div className="container pt-4 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12 col-md-8">
            <div className="team">
              <h1 className="title">{title}</h1>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default Team;
