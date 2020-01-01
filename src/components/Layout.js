import React from "react"
import styled from "styled-components"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export const Layout = ({ children }) => {
  const { title, description, authorName } = useSiteMetadata()
  return (
    <React.Fragment>
      <Header siteTitle={title} siteDescription={description} />
      {children}
      <Footer authorName={authorName} />
    </React.Fragment>
  )
}
