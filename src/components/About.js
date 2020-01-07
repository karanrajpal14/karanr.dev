import React from "react"
import { Section, Container, Title, Column } from "rbx"
import { IconContext } from "react-icons"
import { FaChevronRight } from "react-icons/fa"

export const About = ({ authorName }) => {
  return (
    <Section backgroundColor="light">
      <Column size="half" offset="one-quarter">
        <IconContext.Provider
          value={{ color: "#33b5e5", style: { verticalAlign: "bottom" } }}
        >
          <Title as="h2">
            <FaChevronRight /> A little about me
          </Title>
          <Container fluid>
            A little about me A little about me A little about me A little about
            me A little about me A little about me A little about me A little
            about me
          </Container>
        </IconContext.Provider>
      </Column>
    </Section>
  )
}
