import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Navbar as RBXNavbar } from "rbx"
import { useNavbarContent } from "../hooks/useNavbarContent"
import navbarStyles from "./navbar.module.scss"

export const Navbar = () => {
  const { nodes } = useNavbarContent()

  const generateNavbarItems = () => {
    const navbarItemsArray = []
    nodes.forEach(item => {
      navbarItemsArray.push(
        <RBXNavbar.Item as="div" textSize="4" key={item.label}>
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
    <RBXNavbar
      color="white"
      as="header"
      fixed="top"
      className={navbarStyles.navbar}
      transparent
    >
      <RBXNavbar.Brand>
        <RBXNavbar.Item as="div" textSize="4">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="1.5em"
              fill="#000"
              viewBox="0 0 157.4 98"
              className={navbarStyles.logo}
            >
              <title>Karan Rajpal</title>
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
          {/* {generateNavbarItems()} */}
          <RBXNavbar.Item as="div" textSize="4" dropdown hoverable>
            <RBXNavbar.Link>
              <Link
                to="/"
                className={navbarStyles.navItem}
                activeClassName={navbarStyles.navItemActive}
              >
                Home
              </Link>
            </RBXNavbar.Link>
            <RBXNavbar.Dropdown boxed>
              <RBXNavbar.Item as="div" textSize="4">
                <AnchorLink
                  to="/#about"
                  className={navbarStyles.navItem}
                  activeClassName={navbarStyles.navItemActive}
                >
                  About me
                </AnchorLink>
              </RBXNavbar.Item>
              <RBXNavbar.Item as="div" textSize="4">
                <AnchorLink
                  to="/#work"
                  className={navbarStyles.navItem}
                  activeClassName={navbarStyles.navItemActive}
                >
                  Work
                </AnchorLink>
              </RBXNavbar.Item>
              <RBXNavbar.Item as="div" textSize="4">
                <AnchorLink
                  to="/#recent-projects"
                  className={navbarStyles.navItem}
                  activeClassName={navbarStyles.navItemActive}
                >
                  Recent projects
                </AnchorLink>
              </RBXNavbar.Item>
              <RBXNavbar.Item as="div" textSize="4">
                <AnchorLink
                  to="/#skills"
                  className={navbarStyles.navItem}
                  activeClassName={navbarStyles.navItemActive}
                >
                  Skills
                </AnchorLink>
              </RBXNavbar.Item>
              <RBXNavbar.Item as="div" textSize="4">
                <AnchorLink
                  to="/#recent-posts"
                  className={navbarStyles.navItem}
                  activeClassName={navbarStyles.navItemActive}
                >
                  Recent blog posts
                </AnchorLink>
              </RBXNavbar.Item>
              <RBXNavbar.Item as="div" textSize="4">
                <AnchorLink
                  to="/#contact"
                  className={navbarStyles.navItem}
                  activeClassName={navbarStyles.navItemActive}
                >
                  Contact
                </AnchorLink>
              </RBXNavbar.Item>
            </RBXNavbar.Dropdown>
          </RBXNavbar.Item>
          <RBXNavbar.Item as="div" textSize="4">
            <Link
              to="/projects/"
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.navItemActive}
            >
              Projects
            </Link>
          </RBXNavbar.Item>
          <RBXNavbar.Item as="div" textSize="4">
            <Link
              to="/blog/"
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.navItemActive}
            >
              Blog
            </Link>
          </RBXNavbar.Item>
        </RBXNavbar.Segment>
      </RBXNavbar.Menu>
    </RBXNavbar>
  )
}
