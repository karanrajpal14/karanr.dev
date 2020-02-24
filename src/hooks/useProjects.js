import { graphql, useStaticQuery } from "gatsby"

export const useProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { published: { eq: true }, type: { eq: "project" } }
        }
      ) {
        nodes {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            title
            date(formatString: "YYYY MMMM Do")
            tags
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000, traceSVG: { color: "#639" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  return data.allMdx.nodes
}
