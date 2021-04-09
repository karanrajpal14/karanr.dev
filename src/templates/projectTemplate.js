import React from "react"
import { Layout } from "../components/Layout"
import { graphql, Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { Container, Title, Divider, Button, Icon, Column, Section } from "rbx"
import SEOComponent from "../components/SEOComponent"
import { IconSelector } from "src/components/IconSelector"

export default ({ data, pageContext }) => {
  const { image, siteUrl } = useSiteMetadata()
  const { frontmatter, body, fields, excerpt } = data.mdx
  const { title, date, cover } = frontmatter
  const { previous, next } = pageContext
  return (
    <Layout>
      <SEOComponent
        title={title}
        description={excerpt}
        image={
          cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
        }
        article={true}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <Section id="#top">
        <Container>
          <Title>{title}</Title>
          <Title size={5} subtitle>
            {date}
          </Title>
          <Divider />
          {!!frontmatter.cover ? (
            <Img sizes={frontmatter.cover.childImageSharp.sizes} />
          ) : null}
          <Divider />
          <MDXRenderer>{body}</MDXRenderer>

          <Column.Group multiline centered>
            <Column narrow>
              {previous === false ? null : (
                <React.Fragment>
                  {previous && (
                    <Button as={Link} to={`/projects${previous.fields.slug}`}>
                      <Icon size="small">
                        <IconSelector icon="chevleft" />
                      </Icon>
                      <Title size={6}>{previous.frontmatter.title}</Title>
                    </Button>
                  )}
                </React.Fragment>
              )}
            </Column>

            <Column narrow>
              <Button as={AnchorLink} to={`/projects${fields.slug}/#top`}>
                Scroll to top
              </Button>
            </Column>

            <Column narrow>
              {next === false ? null : (
                <React.Fragment>
                  {next && (
                    <Button as={Link} to={`/projects${next.fields.slug}`}>
                      <Icon size="small">
                        <IconSelector icon="chevright" />
                      </Icon>
                      <Title size={6}>{next.frontmatter.title}</Title>
                    </Button>
                  )}
                </React.Fragment>
              )}
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`
