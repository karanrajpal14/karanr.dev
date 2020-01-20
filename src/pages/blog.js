import React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../components/Layout"
import SEO from "react-seo-component"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { Section, Container, Column, Title, Card, Generic } from "rbx"
import { IconSelector } from "../components/IconSelector"

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
            <IconSelector icon="chevright" /> All posts
          </Title>
          <Column.Group multiline centered>
            {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
              <Column size="one-fourth-desktop half-tablet" key={id}>
                <Link to={`/blog/${fields.slug}`}>
                  <Card className="card-equal-height">
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
                  </Card>
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
  query POST_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, type: { eq: "post" } } }
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
