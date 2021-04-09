import React from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import SEO from "react-seo-component"
import { useLocation } from "@reach/router"

const SEOComponent = ({
  title,
  description,
  image,
  article,
  createdDate,
  modifiedDate,
}) => {
  const { pathname } = useLocation()

  const {
    defaultDescription,
    siteUrl,
    defaultImage,
    siteLanguage,
    siteLocale,
    authorName,
    twitterUsername,
  } = useSiteMetadata()

  return (
    <SEO
      title={title}
      titleTemplate={authorName}
      description={description || defaultDescription}
      image={`${siteUrl}${image || defaultImage}`}
      pathname={`${siteUrl}${pathname}`}
      siteLanguage={siteLanguage}
      siteLocale={siteLocale}
      twitterUsername={twitterUsername}
      author={authorName}
      article={article || false}
      publishedDate={createdDate}
      modifiedDate={modifiedDate}
    />
  )
}

export default SEOComponent

SEOComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  createdDate: PropTypes.instanceOf(Date),
  modifiedDate: PropTypes.instanceOf(Date),
}

SEOComponent.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  createdDate: new Date("2016/06/15"),
  modifiedDate: new Date("2016/06/15"),
}
