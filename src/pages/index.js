import React from "react"
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';

export default ({ data }) => {

    return (
        <React.Fragment>
            <Layout>
                {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
                    <React.Fragment>
                        <h1>{frontmatter.title}</h1>
                        <p>{frontmatter.date}</p>
                        <p>{excerpt}</p>
                    </React.Fragment>
                ))}
            </Layout>
        </React.Fragment>
    );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
      }
    }
  }
`;