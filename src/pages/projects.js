import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Layout } from "../components/Layout"
import Img from "gatsby-image"
import SEO from "react-seo-component"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { Section, Container, Title, Image, Column, Card, Generic } from "rbx"
import { IconSelector } from "../components/IconSelector"

const StyledImage = styled(Img)`
  border-radius: 5px 5px 0 0 !important;
`

const StyledCard = styled(Card)`
  border-radius: 5px !important;
  transition: all 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px !important;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.005, 1.005);
    &::after {
      opacity: 1;
    }
  }
`

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
                <Link to={`/project/${fields.slug}`}>
                  <StyledCard className="card-equal-height">
                    <Card.Image>
                      {!!frontmatter.cover ? (
                        <Image.Container size={512}>
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
                        {excerpt}
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
                                  <IconSelector icon={tag} />
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
        excerpt(pruneLength: 250)
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
