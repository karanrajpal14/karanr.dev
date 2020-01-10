import React from "react"
import { Formik, Form, Field as FormikField, ErrorMessage } from "formik"
import {
  Field,
  Label,
  Control,
  Input,
  Help,
  Icon,
  Textarea,
  Button,
  Container,
  Section,
  Column,
  Card,
  Content,
  Generic,
} from "rbx"
import * as yup from "yup"
import { FaEnvelope, FaUser, FaTelegramPlane } from "react-icons/fa"

const alpha = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .matches(alpha, {
      message: "Please enter a valid name",
      excludeEmptyString: true,
    })
    .min(2, "Too short a name, don't you think?")
    .max(30, "Woah there, is that a name or an API key")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required. How else am I going to contact you?"),
  message: yup
    .string()
    .min(10, "That message seems to be a tad bit short, don't you think?"),
})

export const Contact = () => {
  return (
    <Section id="contact">
      <Generic as={Container} textAlign="centered">
        <Column.Group centered>
          <Column size="half">
            <Card id="contact-card">
              <Card.Content as={Content}>
                <h3 className="title has-text-centered">Get in touch!</h3>
                <p>
                  Want to talk about tech, games or comics? Or anything else at
                  all?
                </p>
                <p>Hit me up. We'll have a chat :D</p>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  validationSchema={contactSchema}
                  render={formProps => {
                    return (
                      <Form>
                        <Field horizontal>
                          <Field.Label>
                            <Label>Name</Label>
                          </Field.Label>
                          <Field.Body>
                            <Field>
                              <Control expanded iconLeft>
                                <Input
                                  as={FormikField}
                                  type="text"
                                  name="name"
                                  placeholder="John Doe"
                                />
                                <Help color="black" as="div">
                                  <ErrorMessage name="name" component="p" />
                                </Help>
                                <Icon size="small" align="left">
                                  <FaUser />
                                </Icon>
                              </Control>
                            </Field>
                          </Field.Body>
                        </Field>
                        <Field horizontal>
                          <Field.Label>
                            <Label>Email</Label>
                          </Field.Label>
                          <Field.Body>
                            <Field>
                              <Control expanded iconLeft>
                                <Input
                                  as={FormikField}
                                  type="email"
                                  name="email"
                                  placeholder="john@gmail.com"
                                />
                                <Help color="black" as="div">
                                  <ErrorMessage name="email" component="p" />
                                </Help>
                                <Icon size="small" align="left">
                                  <FaEnvelope />
                                </Icon>
                              </Control>
                            </Field>
                          </Field.Body>
                        </Field>
                        <Field horizontal>
                          <Field.Label>
                            <Label>Message</Label>
                          </Field.Label>
                          <Field.Body>
                            <Field>
                              <Control expanded>
                                <Textarea
                                  name="message"
                                  as={FormikField}
                                  component="textarea"
                                  placeholder="Tell me, what ails you?"
                                />
                                <Help color="black" as="div">
                                  <ErrorMessage name="message" component="p" />
                                </Help>
                              </Control>
                            </Field>
                          </Field.Body>
                        </Field>
                        <Field horizontal>
                          <Field.Body>
                            <Field>
                              <Control>
                                <Button.Group align="centered">
                                  <Button
                                    type="submit"
                                    color="black"
                                    size="medium"
                                  >
                                    <Icon size="small" align="left">
                                      <FaTelegramPlane />
                                    </Icon>
                                    <span>Send</span>
                                  </Button>
                                </Button.Group>
                              </Control>
                            </Field>
                          </Field.Body>
                        </Field>
                      </Form>
                    )
                  }}
                />
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Generic>
    </Section>
  )
}
