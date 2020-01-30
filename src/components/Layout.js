import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import "./layout.scss"
import PageTransition from "gatsby-v2-plugin-page-transitions"

export const Layout = ({ children }) => {
  const { title, description, authorName } = useSiteMetadata()
  return (
    <PageTransition transitionTime={500}>
      <React.Fragment>
        <Navbar />
        <main class="site-content">{children}</main>
        <Footer authorName={authorName} />
      </React.Fragment>
    </PageTransition>
  )
}
