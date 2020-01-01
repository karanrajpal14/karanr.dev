import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Layout } from "../components/Layout"
import Img from "gatsby-image"
import SEO from "react-seo-component"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const IndexWrapper = styled.main``

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
      <IndexWrapper>
        <h1>Contact</h1>
        <h2>
          You can reach out to me on Twitter via{" "}
          <a
            href="https://twitter.com/karanrajpal14"
            target="_blank"
            rel="noopener noreferrer"
          >
            @karanrajpal14
          </a>
        </h2>
      </IndexWrapper>
    </Layout>
  )
}
