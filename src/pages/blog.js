import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/Layout"
import SEO from "react-seo-component"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { useBlogPosts } from "../hooks/useBlogPosts"
import { Section, Container, Column, Title, Generic } from "rbx"
import { IconSelector } from "../components/IconSelector"
import { StyledCard } from "../components/StyledCard"

export default () => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()
  const posts = useBlogPosts()

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
      <Section className="navbar-margin">
        <Container>
          <Title as="h1">
            <IconSelector icon="chevright" /> All posts
          </Title>
          <Column.Group multiline centered>
            {posts.map(({ id, excerpt, frontmatter, fields }) => (
              <Column size="one-fourth-desktop half-tablet" key={id}>
                <Link to={`/blog/${fields.slug}`}>
                  <StyledCard className="card-equal-height">
                    <StyledCard.Header>
                      <StyledCard.Header.Title align="centered">
                        <Title as="h2" size={4}>
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
            ))}
          </Column.Group>
        </Container>
      </Section>
    </Layout>
  )
}
