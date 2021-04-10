import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Navbar as RBXNavbar } from "rbx"
import { useNavbarContent } from "../hooks/useNavbarContent"
import * as navbarStyles from "./navbar.module.scss"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export const Navbar = () => {
  const { nodes } = useNavbarContent()
  const { authorName } = useSiteMetadata()

  const wrapNavbarItem = item => {
    return (
      <RBXNavbar.Item as="div" textSize={4} key={item.label}>
        {item.link.includes("#") ? (
          <AnchorLink
            to={item.link}
            className={navbarStyles.navItem}
            activeClassName={navbarStyles.navItemActive}
          >
            {item.label}
          </AnchorLink>
        ) : (
          <Link
            to={item.link}
            className={navbarStyles.navItem}
            activeClassName={navbarStyles.navItemActive}
          >
            {item.label}
          </Link>
        )}
      </RBXNavbar.Item>
    )
  }

  const generateNavbarItems = () => {
    const navbarItems = []
    nodes.forEach(item => {
      const subItems = []

      if (item.subfields !== null) {
        item.subfields.forEach(subItem => {
          subItems.push(wrapNavbarItem(subItem))
        })

        navbarItems.push(
          <RBXNavbar.Item
            as="div"
            textSize={4}
            key={item.label}
            dropdown
            hoverable
          >
            <RBXNavbar.Link>
              <Link
                to={item.link}
                className={navbarStyles.navItem}
                activeClassName={navbarStyles.navItemActive}
              >
                {item.label}
              </Link>
            </RBXNavbar.Link>
            <RBXNavbar.Dropdown boxed>{subItems}</RBXNavbar.Dropdown>
          </RBXNavbar.Item>
        )
      } else {
        navbarItems.push(wrapNavbarItem(item))
      }
    })
    return navbarItems
  }

  return (
    <RBXNavbar
      as="header"
      fixed="top"
      className={navbarStyles.navbar}
      transparent
    >
      <RBXNavbar.Brand>
        <RBXNavbar.Item as="div" textSize={4}>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="1.5em"
              fill="#000"
              viewBox="0 0 157.4 98"
              className={navbarStyles.logo}
            >
              <title>{authorName}</title>
              <path d="M0 31.3V98H67L0 31.3Z" />
              <path d="M0 66.7V0H67L0 66.7Z" />
              <path d="M90 31.3V98h67L90 31.3Z" />
              <path d="M157.4 24.5h0A24.5 24.5 0 0 1 132.9 49H90V0h42.8A24.5 24.5 0 0 1 157.4 24.5Z" />
            </svg>
          </Link>
        </RBXNavbar.Item>
        <RBXNavbar.Burger />
      </RBXNavbar.Brand>
      <RBXNavbar.Menu>
        <RBXNavbar.Segment align="end">
          {generateNavbarItems()}
        </RBXNavbar.Segment>
      </RBXNavbar.Menu>
    </RBXNavbar>
  )
}
