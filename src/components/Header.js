import React from "react"
import { Link } from "gatsby"

export const Header = ({ siteTitle, siteDescription }) => (
  <header>
    <Link to="/">
      <h1>{siteTitle}</h1>
      <p>{siteDescription}</p>
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)
