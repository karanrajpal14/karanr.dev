import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export const Layout = ({ children }) => {
  const { title, description, authorName } = useSiteMetadata()
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer authorName={authorName} />
    </React.Fragment>
  )
}
