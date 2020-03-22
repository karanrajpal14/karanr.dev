import React from "react"
import { Layout } from "../components/Layout"
import SEO from "react-seo-component"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Hero from "../components/Hero"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { Blog } from "../components/Blog"
import Contact from "../components/Contact"
import { Work } from "../components/Work"
import { Skills } from "../components/Skills"

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
      <About />
      <Work />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </Layout>
  )
}
