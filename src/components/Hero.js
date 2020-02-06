import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Hero as RBXHero,
  Generic,
  Container,
  Title,
  Image,
  Level,
  Heading,
} from "rbx"
import { IconContext } from "react-icons"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileDownload,
  FaChevronDown,
} from "react-icons/fa"
import heroStyles from "./hero.module.scss"
import Img from "gatsby-image"

const Hero = ({
  authorName,
  designation,
  githubUsername,
  linkedinUsername,
  twitterUsername,
}) => {
  const data = useStaticQuery(graphql`
    {
      allImageSharp(filter: { fixed: { originalName: { eq: "photo.png" } } }) {
        nodes {
          fixed(width: 300, traceSVG: { color: "#639" }) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  const title = `Hello. I'm ${authorName}.`
  const subtitle = `A ${designation} from Bangalore, India.`

  const prepareAnimatedText = () => {
    let titleNode = []
    let subtitleNode = []

    ;[...title].forEach((letter, index) => {
      titleNode.push(
        <span className="title-letter" key={index}>
          {letter}
        </span>
      )
    })
    ;[...subtitle].forEach((letter, index) => {
      subtitleNode.push(
        <span className="subtitle-letter" key={index}>
          {letter}
        </span>
      )
    })

    return {
      wrappedTitle: titleNode,
      wrappedSubtitle: subtitleNode,
    }
  }

  return (
    <RBXHero size="fullheight" color="white" className={heroStyles.heroBg}>
      <RBXHero.Body>
        <Generic as={Container} textAlign="centered">
          <Image.Container
            data-sal="zoom-in"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <Image as={Img} fixed={data.allImageSharp.nodes[0].fixed} rounded />
          </Image.Container>

          <Title
            as="h1"
            className="elements-effect"
            size={1}
            data-sal="fade"
            data-sal-delay="300"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <Generic as="span" className="text-wrapper">
              <Generic as="span" className="animated-title">
                {prepareAnimatedText().wrappedTitle}
              </Generic>
              <Generic
                as="span"
                className={heroStyles.animatedTitleUnderline}
              ></Generic>
            </Generic>
          </Title>

          <Title
            as="h2"
            className="elements-effect"
            size={4}
            subtitle
            spaced
            data-sal="fade"
            data-sal-delay="600"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <Generic as="span" className="text-wrapper">
              <Generic as="span" className="animated-subtitle">
                {prepareAnimatedText().wrappedSubtitle}
              </Generic>
              <Generic
                as="span"
                className={heroStyles.animatedSubtitleUnderline}
              ></Generic>
            </Generic>
          </Title>

          <IconContext.Provider
            value={{
              size: "3em",
              color: "#0a0a0a",
              style: { margin: "0.5em" },
            }}
          >
            <Level
              data-sal="fade"
              data-sal-delay="800"
              data-sal-duration="2000"
              data-sal-easing="ease"
            >
              <Level.Item textAlign="centered">
                <Generic as="div">
                  <Heading>GitHub</Heading>
                  <a
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className={heroStyles.ghicon} />
                  </a>
                </Generic>
              </Level.Item>

              <Level.Item textAlign="centered">
                <Generic as="div">
                  <Heading>LinkedIn</Heading>
                  <a
                    href={`https://linkedin.com/in/${linkedinUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-button"
                  >
                    <FaLinkedin className={heroStyles.lnicon} />
                  </a>
                </Generic>
              </Level.Item>
              <Level.Item textAlign="centered">
                <Generic as="div">
                  <Heading>Twitter</Heading>
                  <a
                    href={`https://twitter.com/${twitterUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-button"
                  >
                    <FaTwitter className={heroStyles.twicon} />
                  </a>
                </Generic>
              </Level.Item>

              <Level.Item textAlign="centered">
                <Generic as="div">
                  <Heading>Resume</Heading>
                  <a
                    href="/documents/karan-rajpal-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-button"
                  >
                    <FaFileDownload className={heroStyles.dwicon} />
                  </a>
                </Generic>
              </Level.Item>
            </Level>
          </IconContext.Provider>

          <IconContext.Provider value={{ size: "2em", color: "#0a0a0a" }}>
            <Generic
              as="div"
              data-sal="fade"
              data-sal-delay="900"
              data-sal-duration="2000"
              data-sal-easing="ease"
            >
              <FaChevronDown className="chevron" />
            </Generic>
            <Generic
              as="div"
              data-sal="fade"
              data-sal-delay="900"
              data-sal-duration="2000"
              data-sal-easing="ease"
            >
              <FaChevronDown className="chevron" />
            </Generic>
          </IconContext.Provider>
        </Generic>
      </RBXHero.Body>
    </RBXHero>
  )
}

export default Hero
