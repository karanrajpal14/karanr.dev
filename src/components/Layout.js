import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import "./layout.scss"

export const Layout = ({ children }) => {
  return (
      <React.Fragment>
        <Navbar />
        <main className="site-content">{children}</main>
        <Footer />
      </React.Fragment>
  )
}
