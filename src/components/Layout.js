import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import "./layout.scss"

export const Layout = ({ children }) => {
  const { title, description, authorName } = useSiteMetadata()
  return (
      <React.Fragment>
        <Navbar />
        <main className="site-content">{children}</main>
        <Footer authorName={authorName} />
      </React.Fragment>
  )
}
