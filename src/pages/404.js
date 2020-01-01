import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Layout } from "../components/Layout"
import SEO from "react-seo-component"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const IndexWrapper = styled.main``

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
        <h1>Uh oh, looks like you're not where you should be.</h1>
        <h2>
          <Link to="/">Head back home and start over</Link>
        </h2>
      </IndexWrapper>
    </Layout>
  )
}
