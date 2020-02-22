import React from "react"
import { Section, Container, Title, Column } from "rbx"
import { IconSelector } from "./IconSelector"

export const About = ({ authorName }) => {
  let date1 = new Date("2016/06/18").getFullYear()
  let date2 = new Date().getFullYear()
  let yearsDiff = date2 - date1

  return (
    <Section id="about">
      <Column size="half" offset="one-quarter">
        <Title as="h2">
          <IconSelector icon="chevright" /> A little about me
        </Title>
        <Container fluid>
          <Title as="p" subtitle>
            I'm a student at the University of Texas, Arlington currently
            pursing my Master's in Computer Science. I love building Web and
            Android applications and I've been been professionally developing
            applications for the past {yearsDiff} years.
          </Title>
        </Container>
      </Column>
    </Section>
  )
}
