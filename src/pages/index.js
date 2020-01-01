import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Layout } from "../components/Layout"
import Img from "gatsby-image"
import SEO from "react-seo-component"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Hero from "../components/Hero"
import "rbx/index.css"

export default ({ data }) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    authorName,
    designation,
    twitterUsername,
    githubUsername,
    linkedinUsername,
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
      <Hero
        authorName={authorName}
        designation={designation}
        twitterUsername={twitterUsername}
        githubUsername={githubUsername}
        linkedinUsername={linkedinUsername}
      />
    </Layout>
  )
}
