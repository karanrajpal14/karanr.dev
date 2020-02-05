import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Section, Container, Title, Column, Generic } from "rbx"
import { IconSelector } from "./IconSelector"
import { StyledCard } from "./StyledCard"

export const Blog = ({ authorName }) => {
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
                sizes(maxWidth: 1500, traceSVG: { color: "#639" }) {
                  ...GatsbyImageSharpSizes_tracedSVG
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
  return (
    <Section id="recent-posts">
      <Column size="half" offset="one-quarter">
        <Title as="h2">
          <IconSelector icon="chevright" /> Recent blog posts
        </Title>
        <Container fluid>
          <Column.Group multiline>
            {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => {
              return (
                <Column size="one-third-desktop half-tablet" narrow key={id}>
                  <Link to={"/blog/" + fields.slug}>
                    <StyledCard className="card-equal-height">
                      <StyledCard.Header>
                        <StyledCard.Header.Title align="centered">
                          <Title as="p" size={4}>
                            {frontmatter.title}
                          </Title>
                        </StyledCard.Header.Title>
                      </StyledCard.Header>
                      <StyledCard.Content>
                        <Title as="p" subtitle size={5}>
                          {excerpt.substring(frontmatter.title.length)}
                        </Title>
                      </StyledCard.Content>
                      <StyledCard.Footer
                        as="footer"
                        className="card-equal-height card-footer"
                      >
                        <StyledCard.Footer.Item as="p">
                          {!!frontmatter.tags
                            ? frontmatter.tags.map(tag => {
                                return (
                                  <Generic
                                    as="span"
                                    tooltip={tag}
                                    tooltipColor="black"
                                    textColor="primary"
                                    key={tag}
                                  >
                                    <IconSelector
                                      icon={tag}
                                      style={{ margin: "0.5em" }}
                                    />
                                  </Generic>
                                )
                              })
                            : null}
                        </StyledCard.Footer.Item>
                      </StyledCard.Footer>
                    </StyledCard>
                  </Link>
                </Column>
              )
            })}
          </Column.Group>
          <Title textAlign="centered" subtitle>
            <Link to="/blog">
              Read more <IconSelector icon="angleright" />
            </Link>
          </Title>
        </Container>
      </Column>
    </Section>
  )
}
