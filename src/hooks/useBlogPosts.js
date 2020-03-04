import { graphql, useStaticQuery } from "gatsby"

export const useBlogPosts = () => {
  const data = useStaticQuery(
    graphql`
      query GET_BLOG_POSTS {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            frontmatter: { published: { eq: true }, type: { eq: "post" } }
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
                  fluid(maxWidth: 900, traceSVG: { color: "#639" }) {
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
    `
  )
  return data.allMdx.nodes
}
