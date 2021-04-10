import { graphql, useStaticQuery } from "gatsby"

export const getBlogPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        limit: 3
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { published: { eq: true }, type: { eq: "post" } }
        }
      ) {
        nodes {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "YYYY MMMM Do")
            tags
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1500, traceSVG: { color: "#639" }) {
                  ...GatsbyImageSharpFluid_tracedSVG
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
