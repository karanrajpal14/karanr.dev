import React from "react"
import SEO from "react-seo-component"
import { Layout } from "../components/Layout"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import {
  Container,
  Title,
  Divider,
  Button,
  Icon,
  Column,
  Section,
  Image,
} from "rbx"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default ({ data, pageContext }) => {
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata()
  const { frontmatter, body, fields, excerpt } = data.mdx
  const { title, date, cover } = frontmatter
  const { previous, next } = pageContext
  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        image={
          cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <Section>
        <Container>
          <Title>{title}</Title>
          <Title subtitle>{date}</Title>
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
                        <FaChevronLeft />
                      </Icon>
                      <p>{previous.frontmatter.title}</p>
                    </Button>
                  )}
                </React.Fragment>
              )}
            </Column>

            <Column narrow>
              <Button as={Link}>Scroll to top</Button>
            </Column>

            <Column narrow>
              {next === false ? null : (
                <React.Fragment>
                  {next && (
                    <Button as={Link} to={`/projects${next.fields.slug}`}>
                      <Icon size="small">
                        <FaChevronRight />
                      </Icon>
                      <p>{next.frontmatter.title}</p>
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
