import React from "react"
import { Title, Section, Card, Column, Container } from "rbx"
import { IconSelector } from "./IconSelector"

export const Work = () => {
  const isMobile = () => {
    return "ontouchstart" in window || navigator.msMaxTouchPoints
  }

  return (
    <Section className="primary-light-bg" id="work">
      <Column size="half" offset="one-quarter">
        <Title as="h2">
          <IconSelector icon="chevright" /> Where I've worked
        </Title>
        <Container fluid>
          <div className={`timeline ${isMobile() ? "" : "is-centered"}`}>
            <header className="timeline-header">
              <span className="tag is-primary">2016</span>
            </header>
            <div className="timeline-item is-techm">
              <div className="timeline-marker is-techm"></div>
              <div className="timeline-content">
                <Title className="heading" size="6">
                  August 2016
                </Title>
                <Card backgroundColor="techm">
                  <Card.Content>
                    <Title textColor="light">Tech Mahindra</Title>
                    <Title textColor="light" subtitle>
                      Associate Software Engineer
                    </Title>
                  </Card.Content>
                </Card>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2017</span>
            </header>
            <div className="timeline-item is-iisc">
              <div className="timeline-marker is-iisc"></div>
              <div className="timeline-content">
                <Title className="heading" size="6">
                  June 2017
                </Title>
                <Card backgroundColor="iisc">
                  <Card.Content>
                    <Title textColor="light">
                      Indian Institute of Science (IISc)
                    </Title>
                    <Title textColor="light" subtitle>
                      Project Assistant
                    </Title>
                  </Card.Content>
                </Card>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2019</span>
            </header>
            <div className="timeline-item is-propelld">
              <div className="timeline-marker is-propelld"></div>
              <div className="timeline-content">
                <Title className="heading" size="6">
                  August 2019
                </Title>
                <Card backgroundColor="propelld">
                  <Card.Content>
                    <Title textColor="light">Propelld</Title>
                    <Title textColor="light" subtitle>
                      Software Developer
                    </Title>
                  </Card.Content>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Column>
    </Section>
  )
}
