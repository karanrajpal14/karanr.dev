import React from "react"
import styled from "styled-components"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`

export const Layout = ({ children }) => {
  const { title, description, authorName } = useSiteMetadata()
  return (
    <AppStyles>
      <Header siteTitle={title} siteDescription={description} />
      {children}
      <Footer authorName={authorName} />
    </AppStyles>
  )
}
