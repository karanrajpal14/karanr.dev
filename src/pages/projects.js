import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Layout } from "../components/Layout"
import Img from "gatsby-image"
import SEO from "react-seo-component"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { Section, Container, Title, Image, Column, Card, Generic } from "rbx"
import { IconSelector } from "../components/IconSelector"
import { StyledCard } from "../components/StyledCard"
import { StyledImage } from "../components/StyledImage"

export default ({ data }) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()

  return (
    <Layout>
      <SEO
        title={title}
        description={description || `No description found’`}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Section>
        <Container>
          <Title as="h1">
            <IconSelector icon="chevright" /> All projects
          </Title>
          <Column.Group multiline centered>
            {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
              <Column size="one-fourth-desktop half-tablet" key={id}>
                <Link to={`/projects/${fields.slug}`}>
                  <StyledCard className="card-equal-height">
                    <Card.Image>
                      {!!frontmatter.cover ? (
                        <Image.Container>
                          <StyledImage
                            sizes={frontmatter.cover.childImageSharp.sizes}
                          />
                        </Image.Container>
                      ) : null}
                    </Card.Image>
                    <Card.Header>
                      <Card.Header.Title align="centered">
                        <Title as="h2" size={4}>
                          {frontmatter.title}
                        </Title>
                      </Card.Header.Title>
                    </Card.Header>
                    <Card.Content>
                      <Title as="p" subtitle size={5}>
                        {excerpt.substring(frontmatter.title.length)}
                      </Title>
                    </Card.Content>
                    <Card.Footer
                      as="footer"
                      className="card-equal-height card-footer"
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
                                  <IconSelector icon={tag} style={{ margin: "0.5em" }} />
                                </Generic>
                              )
                            })
                          : null}
                      </Card.Footer.Item>
                    </Card.Footer>
                  </StyledCard>
                </Link>
              </Column>
            ))}
          </Column.Group>
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query PROJECT_INDEX_QUERY {
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
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
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
`
