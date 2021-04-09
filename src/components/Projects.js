import React from "react"
import { Link } from "gatsby"
import { Section, Container, Title, Column, Image, Generic } from "rbx"
import { IconSelector } from "./IconSelector"
import { StyledCard } from "./StyledCard"
import { StyledImage } from "./StyledImage"
import { useProjects } from "../hooks/useProjects"

export const Projects = () => {
  const projects = useProjects()

  return (
    <Section id="recent-projects">
      <Column size="half" offset="one-quarter">
        <Title as="h2">
          <IconSelector icon="chevright" /> Projects I've worked on
        </Title>
        <Container fluid>
          <Column.Group multiline>
            {projects.map(({ id, excerpt, frontmatter, fields }) => {
              return (
                <Column size="half" narrow key={id}>
                  <Link to={"/projects/" + fields.slug}>
                    <StyledCard className="card-equal-height">
                      <StyledCard.Image>
                        <Image.Container>
                          {!!frontmatter.cover ? (
                            <StyledImage
                              fluid={{
                                ...frontmatter.cover.childImageSharp.fluid,
                                aspectRatio: 16 / 9,
                              }}
                            />
                          ) : null}
                        </Image.Container>
                      </StyledCard.Image>
                      <StyledCard.Header>
                        <StyledCard.Header.Title align="centered">
                          <Title as="p" size={4} textAlign="centered">
                            {frontmatter.title}
                          </Title>
                        </StyledCard.Header.Title>
                      </StyledCard.Header>
                      <StyledCard.Content>
                        <Generic as="p" textSize={5}>
                          {excerpt.substring(frontmatter.title.length)}
                        </Generic>
                      </StyledCard.Content>
                      <StyledCard.Footer
                        as="footer"
                        className="card-equal-height card-footer"
                      >
                        <StyledCard.Footer.Item as="p">
                          {!!frontmatter.tags
                            ? frontmatter.tags.map(tag => {
                                return (
                                  <Generic
                                    as="span"
                                    tooltip={tag}
                                    tooltipColor="black"
                                    textColor="primary"
                                    key={tag}
                                  >
                                    <IconSelector
                                      icon={tag}
                                      style={{ margin: "0.5em" }}
                                    />
                                  </Generic>
                                )
                              })
                            : null}
                        </StyledCard.Footer.Item>
                      </StyledCard.Footer>
                    </StyledCard>
                  </Link>
                </Column>
              )
            })}
          </Column.Group>
          {projects.length > 6 ? (
            <Title as="p" size={4} textAlign="centered" subtitle>
              <Link to="/projects">
                See more <IconSelector icon="angleright" />
              </Link>
            </Title>
          ) : null}
        </Container>
      </Column>
    </Section>
  )
}
