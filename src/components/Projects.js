import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Section, Container, Title, Column, Image, Card } from "rbx"
import { IconContext } from "react-icons"
import { FaChevronRight } from "react-icons/fa"
import styles from "./projects.module.scss"

export const Projects = ({ authorName }) => {
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
        <IconContext.Provider
          value={{ color: "#33b5e5", style: { verticalAlign: "bottom" } }}
        >
          <Title as="h2">
            <FaChevronRight /> Projects I've worked on
          </Title>
          <Container fluid>
            <Column.Group multiline>
              {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => {
                return (
                  <Column size="one-third-desktop half-tablet" narrow key={id}>
                    <Link to={"/projects/" + fields.slug}>
                      <Card>
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
                            <span>
                              {/* <DiAndroid color="green" size="2em" /> */}
                            </span>
                          </Card.Footer.Item>
                        </Card.Footer>
                      </Card>
                    </Link>
                  </Column>
                )
              })}
            </Column.Group>
            A little about me A little about me A little about me A little about
            me A little about me A little about me A little about me A little
            about me
          </Container>
        </IconContext.Provider>
      </Column>
    </Section>
  )
}
