import React from "react"
import {
  Title,
  Section,
  Column,
  Container,
  Level,
  Box,
  Generic,
  Block,
} from "rbx"
import { IconSelector } from "./IconSelector"

export const Skills = () => {
  return (
    <Section backgroundColor="primary-light">
      <Column size="half" offset="one-quarter">
        <Title as="h2">
          <IconSelector icon="chevright" /> Skills I've learned
        </Title>
        <Container fluid>
          {/* JavaScript Section */}
          <Column.Group centered vcentered>
            <Column size="full">
              <Level textAlign="centered">
                <Level.Item>
                  <IconSelector icon="javascript" />
                </Level.Item>
                <Level.Item>
                  <Title textAlign="centered">JavaScript</Title>
                </Level.Item>
              </Level>
              <Block />
              <Column.Group breakpoint="mobile" centered>
                <Column narrow>
                  <Generic as={Box} textAlign="centered">
                    <IconSelector icon="react" />
                    <Title size="4" textAlign="center">
                      ReactJS
                    </Title>
                  </Generic>
                </Column>
                <Column narrow>
                  <Generic as={Box} textAlign="centered">
                    <IconSelector icon="node" />
                    <Title size="4" textAlign="center">
                      NodeJS
                    </Title>
                  </Generic>
                </Column>
                <Column narrow>
                  <Generic as={Box} textAlign="centered">
                    <IconSelector icon="gatsby" />
                    <Title size="4" textAlign="center">
                      GatsbyJS
                    </Title>
                  </Generic>
                </Column>
                <Column narrow>
                  <Generic as={Box} textAlign="centered">
                    <IconSelector icon="jquery" />
                    <Title size="4" textAlign="center">
                      jQuery
                    </Title>
                  </Generic>
                </Column>
              </Column.Group>
            </Column>
          </Column.Group>

          {/* Python Section */}
          <Column.Group centered vcentered>
            <Column size="full">
              <Level textAlign="centered">
                <Level.Item>
                  <IconSelector icon="python" />
                </Level.Item>
                <Level.Item>
                  <Title textAlign="centered">Python</Title>
                </Level.Item>
              </Level>
              <Block />
              <Column.Group breakpoint="mobile" centered>
                <Column narrow>
                  <Generic as={Box} textAlign="centered">
                    <IconSelector icon="django" />
                    <Title size="4" textAlign="center">
                      Django
                    </Title>
                  </Generic>
                </Column>
                <Column narrow>
                  <Generic as={Box} textAlign="centered">
                    <IconSelector icon="flask" />
                    <Title size="4" textAlign="center">
                      Flask
                    </Title>
                  </Generic>
                </Column>
              </Column.Group>
            </Column>
          </Column.Group>

          {/* Java Section */}
          <Column.Group centered vcentered>
            <Column size="full">
              <Level textAlign="centered">
                <Level.Item>
                  <IconSelector icon="java" />
                </Level.Item>
                <Level.Item>
                  <Title textAlign="centered">Java</Title>
                </Level.Item>
              </Level>
              <Block />
              <Column.Group breakpoint="mobile" centered>
                <Column narrow>
                  <Generic as={Box} textAlign="centered">
                    <IconSelector icon="spring" />
                    <Title size="4" textAlign="center">
                      Spring
                    </Title>
                  </Generic>
                </Column>
                <Column narrow>
                  <Generic as={Box} textAlign="centered">
                    <IconSelector icon="android" />
                    <Title size="4" textAlign="center">
                      Android
                    </Title>
                  </Generic>
                </Column>
              </Column.Group>
            </Column>
          </Column.Group>
        </Container>
      </Column>
    </Section>
  )
}