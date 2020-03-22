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
  Title,
  Notification,
  Delete,
} from "rbx"
import * as yup from "yup"
import axios from "axios"
import { IconSelector } from "src/components/IconSelector"

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default class Contact extends React.Component {
  state = {
    submitSuccessHidden: true,
    submitErrorHidden: true,
  }

  copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
  }

  toggleSuccess = async () => {
    this.setState({
      submitSuccessHidden: false,
      submitErrorHidden: true,
    })
    await sleep(5000)
    this.setState({
      submitSuccessHidden: true,
      submitErrorHidden: true,
    })
  }

  toggleError = async () => {
    this.copyCodeToClipboard()
    this.setState({
      submitSuccessHidden: true,
      submitErrorHidden: false,
    })
    await sleep(10000)
    this.setState({
      submitSuccessHidden: true,
      submitErrorHidden: true,
    })
  }

  alpha = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/

  contactSchema = yup.object().shape({
    name: yup
      .string()
      .matches(this.alpha, {
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

  handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url:
        "https://yyqlhpbvce.execute-api.us-east-1.amazonaws.com/dev/email/send",
      headers: { "Content-Type": "application/json" },
      data: values,
    })
      .then(response => {
        actions.setSubmitting(false)
        this.toggleSuccess()
        actions.resetForm()
      })
      .catch(error => {
        actions.setSubmitting(false)
        this.toggleError()
      })
  }

  render() {
    return (
      <Section id="contact" className="primary-light-bg">
        <Generic as={Container} textAlign="centered">
          <Column.Group centered>
            <Column size="half">
              <Card id="contact-card">
                <Card.Content as={Content}>
                  <Title as="h2" textAlign="centered" spaced>
                    Get in touch!
                  </Title>
                  <Generic as="p" textSize={4}>
                    If you like what you've seen on my site, or if you think I'm
                    a good fit for a role at your company, let me know. I'm
                    currently open to exploring new opportunities.
                  </Generic>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      message: "",
                    }}
                    validationSchema={this.contactSchema}
                    onSubmit={this.handleOnSubmit}
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
                                    <IconSelector icon="name" size="1em" />
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
                                    <IconSelector icon="email" size="1em" />
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
                                    innerRef={textarea =>
                                      (this.textArea = textarea)
                                    }
                                    placeholder="Tell me, what ails you?"
                                  />
                                  <Help color="black" as="div">
                                    <ErrorMessage
                                      name="message"
                                      component="p"
                                    />
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
                                      className="primary-bg"
                                      size="medium"
                                    >
                                      <Icon size="small" align="left">
                                        <IconSelector icon="send" size="1em" />
                                      </Icon>
                                      <span>Send</span>
                                    </Button>
                                  </Button.Group>
                                </Control>
                              </Field>
                            </Field.Body>
                          </Field>
                          <Notification
                            color="success"
                            hidden={this.state.submitSuccessHidden}
                          >
                            <Delete as="button" onClick={this.toggleSuccess} />
                            <Generic as="p" size={3} textWeight="semibold">
                              Thank you for reaching out!
                            </Generic>
                            <Generic as="p" size={3} textWeight="semibold">
                              I've recieved your email and I will get back to
                              you shortly :)
                            </Generic>
                          </Notification>
                          <Notification
                            color="danger"
                            hidden={this.state.submitErrorHidden}
                          >
                            <Delete as="button" onClick={this.toggleError} />
                            <Generic as="p" size={3} textWeight="semibold">
                              Uh oh! Looks like there was a problem sending out
                              the email.
                            </Generic>
                            <Generic as="p" size={3} textWeight="semibold">
                              Sorry about that. Mind trying again?
                            </Generic>
                            <Generic as="p" size={3} textWeight="semibold">
                              Your message is copied to your clipboard ;)
                            </Generic>
                          </Notification>
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
}
