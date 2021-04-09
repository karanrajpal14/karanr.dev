import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SEOComponent from "../components/SEOComponent"

const IndexWrapper = styled.main``

export default () => {
  return (
    <>
      <SEOComponent title="404" />
      <IndexWrapper>
        <h1>Uh oh, looks like you're not where you should be.</h1>
        <h2>
          <Link to="/">Head back home and start over</Link>
        </h2>
      </IndexWrapper>
    </>
  )
}
