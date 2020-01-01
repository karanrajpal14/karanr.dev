import React from "react"
import { Link } from "gatsby"
import { Footer as RBXFooter, Content, Column } from "rbx"
import { FaHeart } from "react-icons/fa"
import footerStyles from "./footer.module.scss"

export const Footer = ({ authorName }) => {
  return (
    <RBXFooter as="footer">
      <Content textAlign="centered">
        <Column.Group centered>
          <Column narrow>
            <Link to="/">Home</Link>
          </Column>
          <Column narrow>
            <Link to="/blog">Blog</Link>
          </Column>
          <Column narrow>
            <Link to="/about">About</Link>
          </Column>
          <Column narrow>
            <Link to="/contact">Contact</Link>
          </Column>
        </Column.Group>
        <p>
          Built with <FaHeart color="red" /> by <Link to="/">{authorName}</Link>{" "}
          - ©️ {new Date().getFullYear()}
        </p>
      </Content>
    </RBXFooter>
  )
}
