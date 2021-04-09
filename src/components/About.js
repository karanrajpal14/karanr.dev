import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Section, Container, Title, Column, Generic } from "rbx"
import { IconSelector } from "./IconSelector"

const Announcement = ({ expiry }) => {
  if (expiry < new Date()) return null
  return (
    <Generic as="p" textSize={4} textWeight="medium" textColor="danger">
      I'm currently looking for full-time web development opportunities. If you have a
      challenging role for me at your organization,{" "}
      <AnchorLink to="/#contact">let me know.</AnchorLink>
    </Generic>
  )
}

export const About = () => {
  let careerStartDate = new Date("2016/06/18").getFullYear()
  let today = new Date().getFullYear()
  let yearsDiff = today - careerStartDate
  let announcementExpiry = new Date("2021/12/31")

  return (
    <Section id="about">
      <Column size="half" offset="one-quarter">
        <Title as="h2">
          <IconSelector icon="chevright" /> A little about me
        </Title>
        <Container fluid>
          <Generic as="p" textSize={4} textWeight="medium">
            I'm a student at the University of Texas, Arlington currently
            pursing my Master's in Computer Science. I love building Web and
            Android applications and I've been been professionally developing
            applications for the past {yearsDiff} years.
          </Generic>
          <Announcement expiry={announcementExpiry} />
        </Container>
      </Column>
    </Section>
  )
}
