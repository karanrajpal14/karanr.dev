import React from "react"
import { Link } from "gatsby"
import { Navbar as RBXNavbar } from "rbx"
import { useNavbarContent } from "../hooks/useNavbarContent"
import navbarStyles from "./navbar.module.scss"

export const Navbar = () => {
  const { nodes } = useNavbarContent()

  const generateNavbarItems = () => {
    const navbarItemsArray = []
    nodes.forEach(item => {
      navbarItemsArray.push(
        <RBXNavbar.Item as="div" key={item.label}>
          <Link
            to={item.link}
            className={navbarStyles.navItem}
            activeClassName={navbarStyles.navItemActive}
          >
            {item.label}
          </Link>
        </RBXNavbar.Item>
      )
    })
    return navbarItemsArray
  }

  return (
    <RBXNavbar color="white" as="header">
      <RBXNavbar.Brand>
        <RBXNavbar.Item as="div">
          <Link to="/">
            <img
              src={"/logo.svg"}
              alt="Karan Rajpal Logo"
              width="80"
              height="25"
            />
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
