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
    <RBXNavbar color="white" as="header" className={navbarStyles.navbar}>
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
          {/* {generateNavbarItems()} */}
          <RBXNavbar.Item dropdown>
            <RBXNavbar.Link>
              <Link
                to="/"
                className={navbarStyles.navItem}
                activeClassName={navbarStyles.navItemActive}
              >
                Home
              </Link>
            </RBXNavbar.Link>
            <RBXNavbar.Dropdown>
              <RBXNavbar.Item>
                <Link
                  to="/#about"
                  className={navbarStyles.navItem}
                  activeClassName={navbarStyles.navItemActive}
                >
                  About me
                </Link>
              </RBXNavbar.Item>
              <RBXNavbar.Item>
                <Link
                  to="/#work"
                  className={navbarStyles.navItem}
                  activeClassName={navbarStyles.navItemActive}
                >
                  Work
                </Link>
              </RBXNavbar.Item>
              <RBXNavbar.Item>
                <Link
                  to="/#recent-projects"
                  className={navbarStyles.navItem}
                  activeClassName={navbarStyles.navItemActive}
                >
                  Recent projects
                </Link>
              </RBXNavbar.Item>
              <RBXNavbar.Item>
                <Link
                  to="/#skills"
                  className={navbarStyles.navItem}
                  activeClassName={navbarStyles.navItemActive}
                >
                  Skills
                </Link>
              </RBXNavbar.Item>
              <RBXNavbar.Item>
                <Link
                  to="/#recent-posts"
                  className={navbarStyles.navItem}
                  activeClassName={navbarStyles.navItemActive}
                >
                  Recent blog posts
                </Link>
              </RBXNavbar.Item>
              <RBXNavbar.Item>
                <Link
                  to="/#contact"
                  className={navbarStyles.navItem}
                  activeClassName={navbarStyles.navItemActive}
                >
                  Contact
                </Link>
              </RBXNavbar.Item>
            </RBXNavbar.Dropdown>
          </RBXNavbar.Item>
          <RBXNavbar.Item>Projects</RBXNavbar.Item>
          <RBXNavbar.Item>Blog</RBXNavbar.Item>
        </RBXNavbar.Segment>
      </RBXNavbar.Menu>
    </RBXNavbar>
  )
}
