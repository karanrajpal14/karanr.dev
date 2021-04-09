import React from "react"
import { Title, Section, Card, Column, Container } from "rbx"
import { IconSelector } from "./IconSelector"

export const Work = () => {
  const isMobile = () => {
    const windowGlobal = typeof window !== "undefined" && window
    return windowGlobal
      ? "ontouchstart" in windowGlobal || navigator.msMaxTouchPoints
      : false
  }

  const TimelineHeader = ({ year }) => {
    return (
      <header className="timeline-header">
        <span className="tag is-primary">{year}</span>
      </header>
    )
  }

  const TimelineItem = ({ startDate, organization, role, color }) => {
    return (
      <div className="timeline-item">
        <div className={`timeline-marker is-${color}`}></div>
        <div className="timeline-content">
          <Title className="heading" size="6">
            {startDate}
          </Title>
          <Card backgroundColor={color}>
            <Card.Content>
              <Title textColor="light" size="5">
                {organization}
              </Title>
              <Title textColor="light" size="6" subtitle>
                {role}
              </Title>
            </Card.Content>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <Section className="primary-light-bg" id="work">
      <Column size="half" offset="one-quarter">
        <Title as="h2">
          <IconSelector icon="chevright" /> Where I've worked
        </Title>
        <Container fluid>
          <div className={`timeline ${isMobile() ? "" : "is-centered"}`}>
            <TimelineHeader year="2016" />
            <TimelineItem
              startDate="August 2016"
              organization="Tech Mahindra"
              role="Associate Software Engineer"
              color="techm"
            />
            <TimelineHeader year="2017" />
            <TimelineItem
              startDate="June 2017"
              organization="Indian Institute of Science (IISc)"
              role="Project Assistant (Software)"
              color="iisc"
            />
            <TimelineHeader year="2019" />
            <TimelineItem
              startDate="August 2019"
              organization="Propelld"
              role="Software Developer"
              color="propelld"
            />
            <TimelineHeader year="2020" />
            <TimelineItem
              startDate="April 2020"
              organization="TRIO Upward Bound Program - UT Arlington"
              role="STEM Tutor"
              color="trio"
            />
            <TimelineItem
              startDate="May 2020"
              organization="ThoughtFocus Inc."
              role="Software Developer Intern"
              color="tf"
            />
            <TimelineItem
              startDate="August 2020"
              organization="Google Developer Student Clubs - UT Arlington"
              role="Technical Lead"
              color="dsc"
            />
            <TimelineItem
              startDate="September 2020"
              organization="College of Business Administration - UT Arlington"
              role="Graduate Teaching Assistant"
              color="gta"
            />
          </div>
        </Container>
      </Column>
    </Section>
  )
}
