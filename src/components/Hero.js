import React from "react"
import { Hero as RBXHero, Generic, Container } from "rbx"
import { IconContext } from "react-icons"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import heroStyles from "./hero.module.scss"

const Hero = ({
  authorName,
  designation,
  githubUsername,
  linkedinUsername,
  twitterUsername,
}) => {
  return (
    <RBXHero size="fullheight" color="black" className={heroStyles.heroBg}>
      <RBXHero.Body>
        <Generic as={Container} textAlign="centered">
          <h1 className="title">Hello. I'm {authorName}.</h1>
          <h2 className="subtitle">A {designation} from Bangalore, India.</h2>
          <IconContext.Provider
            value={{ size: "3em", color: "#fff", style: { margin: "0.5em" } }}
          >
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={heroStyles.ghicon} />
            </a>
            <a
              href={`https://linkedin.com/in/${linkedinUsername}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={heroStyles.lnicon} />
            </a>
            <a
              href={`https://twitter.com/${twitterUsername}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className={heroStyles.twicon} />
            </a>
          </IconContext.Provider>
        </Generic>
      </RBXHero.Body>
    </RBXHero>
  )
}

export default Hero
