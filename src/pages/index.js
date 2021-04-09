import React from "react"
import Hero from "../components/Hero"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { Blog } from "../components/Blog"
import Contact from "../components/Contact"
import { Work } from "../components/Work"
import { Skills } from "../components/Skills"
import SEOComponent from "../components/SEOComponent"

export default () => {
  return (
    <>
      <SEOComponent title="Home" />
      <Hero/>
      <About />
      <Work />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </>
  )
}
