import React from "react"
import { Link } from "gatsby"
import { Footer as RBXFooter, Content, Column } from "rbx"
import { useNavbarContent } from "../hooks/useNavbarContent"
import footerStyles from "./footer.module.scss"
import { IconSelector } from "./IconSelector"

export const Footer = ({ authorName }) => {
  const { nodes } = useNavbarContent()

  const generateFooterItems = () => {
    const footerItemsArray = []
    nodes.forEach(item => {
      footerItemsArray.push(
        <Column narrow key={item.label}>
          <Link
            to={item.link}
            className={footerStyles.navItem}
            activeClassName={footerStyles.navItemActive}
          >
            {item.label}
          </Link>
        </Column>
      )
    })
    return footerItemsArray
  }

  return (
    <RBXFooter
      as="footer"
      backgroundColor="white"
    >
      <Content textAlign="centered">
        <Column.Group centered>{generateFooterItems()}</Column.Group>
        <p>
          Built using{" "}
          <a href="www.gatsbyjs.org">
            <IconSelector icon="gatsby" size="1em" /> GatsbyJS
          </a>{" "}
          by <Link to="/">{authorName}</Link> - ©️ {new Date().getFullYear()}
        </p>
      </Content>
    </RBXFooter>
  )
}
