import React from "react"
import { Link } from "gatsby"
import { Section, Container, Column, Title } from "rbx"
import SEOComponent from "../components/SEOComponent"

const NotFoundPage = () => {
  return (
    <>
      <SEOComponent title="404" />
      <Section>
        <Container>
          <Column.Group multiline centered>
            <Column size="half" offset="one-fourth">
              <Title as="h1" size={4}>
                Uh oh, looks like you're not where you should be.
              </Title>
              <Title as="h1" size={4}>
                Sorry about that.
              </Title>
              <Title as="h2" size={5}>
                <Link to="/">Head back home and start over</Link>
              </Title>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </>
  )
}

export default NotFoundPage
