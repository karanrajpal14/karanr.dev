import React from "react"
import { Link } from "gatsby"
import { Footer as RBXFooter, Content, Column } from "rbx"
import { FaHeart } from "react-icons/fa"
import { useNavbarContent } from "../hooks/useNavbarContent"
import footerStyles from "./footer.module.scss"

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
    <RBXFooter as="footer">
      <Content textAlign="centered">
        <Column.Group centered>{generateFooterItems()}</Column.Group>
        <p>
          Built with <FaHeart color="red" /> by <Link to="/">{authorName}</Link>{" "}
          - ©️ {new Date().getFullYear()}
        </p>
      </Content>
    </RBXFooter>
  )
}
