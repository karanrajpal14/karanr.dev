import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Section, Container, Title, Column, Image, Card, Generic } from "rbx"
import styles from "./projects.module.scss"
import { IconSelector } from "./IconSelector"

export const Projects = ({ authorName }) => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { published: { eq: true }, type: { eq: "project" } }
        }
        limit: 6
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
    <Section backgroundColor="white">
      <Column size="half" offset="one-quarter">
        <Title as="h2">
          <IconSelector icon="chevright" /> Projects I've worked on
        </Title>
        <Container fluid>
          <Column.Group multiline>
            {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => {
              return (
                <Column size="one-third-desktop half-tablet" narrow key={id}>
                  <Link to={"/projects/" + fields.slug}>
                    <Card className={styles.cardEqualHeight}>
                      <Card.Image>
                        <Image.Container>
                          {!!frontmatter.cover ? (
                            <Img
                              sizes={frontmatter.cover.childImageSharp.sizes}
                            />
                          ) : null}
                        </Image.Container>
                      </Card.Image>
                      <Card.Header>
                        <Card.Header.Title align="centered">
                          <Title as="p" size={4}>
                            {frontmatter.title}
                          </Title>
                        </Card.Header.Title>
                      </Card.Header>
                      <Card.Content>
                        <Title as="p" subtitle size={5}>
                          {excerpt}
                        </Title>
                      </Card.Content>
                      <Card.Footer
                        as="footer"
                        className={`stlyes.cardEqualHeight ${styles.cardFooter}`}
                      >
                        <Card.Footer.Item as="p">
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
                                    <IconSelector icon={tag} />
                                  </Generic>
                                )
                              })
                            : null}
                        </Card.Footer.Item>
                      </Card.Footer>
                    </Card>
                  </Link>
                </Column>
              )
            })}
          </Column.Group>
          <Title textAlign="centered" subtitle>
            <Link to="/projects">See more <IconSelector icon="angleright" /></Link>
          </Title>
        </Container>
      </Column>
    </Section>
  )
}
