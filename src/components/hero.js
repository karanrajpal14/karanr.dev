import React from "react"
import { Hero as _hero, Generic, Container } from "rbx"
import { IconContext } from "react-icons"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import heroStyles from "./hero.module.scss"

const Hero = () => {
  return (
    <_hero size="fullheight" color="black" className={heroStyles.heroBg}>
      <_hero.Body>
        <Generic as={Container} textAlign="centered">
          <h1 className="title">Hello. I'm Karan Rajpal.</h1>
          <h2 className="subtitle">
            A full-stack developer from Bangalore, India.
          </h2>
          <IconContext.Provider
            value={{ size: "3em", color: "#fff", style: { margin: "0.5em" } }}
          >
            <a
              href="https://github.com/karanrajpal14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/karan-rajpal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/karanrajpal14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </IconContext.Provider>
        </Generic>
      </_hero.Body>
    </_hero>
  )
}

export default Hero
