import React from "react"
import Android from "src/styles/icons/android.svg"
import Buymeacoffee from "src/styles/icons/buymeacoffee.svg"
import ChevronD from "src/styles/icons/chevrond.svg"
import ChevronL from "src/styles/icons/chevronl.svg"
import ChevronR from "src/styles/icons/chevronr.svg"
import Css3 from "src/styles/icons/css3.svg"
import Django from "src/styles/icons/django.svg"
import Email from "src/styles/icons/email.svg"
import Exclamation from "src/styles/icons/exclamation.svg"
import Flask from "src/styles/icons/flask.svg"
import Gatsby from "src/styles/icons/gatsby.svg"
import Github from "src/styles/icons/github.svg"
import Html5 from "src/styles/icons/html5.svg"
import Java from "src/styles/icons/java.svg"
import Javascript from "src/styles/icons/javascript.svg"
import Jquery from "src/styles/icons/jquery.svg"
import Linkedin from "src/styles/icons/linkedin.svg"
import Name from "src/styles/icons/name.svg"
import NodeJs from "src/styles/icons/nodejs.svg"
import Portfolio from "src/styles/icons/portfolio.svg"
import Python from "src/styles/icons/python.svg"
import ReactJs from "src/styles/icons/reactjs.svg"
import Send from "src/styles/icons/send.svg"
import Spring from "src/styles/icons/spring.svg"
import Twitter from "src/styles/icons/twitter.svg"

export const IconSelector = ({ icon, size, style }) => {
  let selectedIcon = icon.toLowerCase()
  let iconSize = size !== undefined ? size : "2em"

  const icons = {
    android: <Android fill="#3DDC84" width={iconSize} style={style} />,
    chevright: (
      <ChevronR
        color="#663399"
        width="0.7em"
        style={{ verticalAlign: "bottom" }}
      />
    ),
    chevleft: (
      <ChevronL
        color="#663399"
        width="0.7em"
        style={{ verticalAlign: "bottom" }}
      />
    ),
    chevdown: (
      <ChevronD
        className="chevron"
        fill="#0a0a0a"
        width={iconSize}
        style={{ verticalAlign: "bottom" }}
      />
    ),
    java: <Java fill="#ED1D25" width={iconSize} style={style} />,
    html: <Html5 fill="#E34F26" width={iconSize} style={style} />,
    css: <Css3 fill="#1572B6" width={iconSize} style={style} />,
    javascript: <Javascript fill="#F7DF1E" width={iconSize} style={style} />,
    react: <ReactJs fill="#61DAFB" width={iconSize} style={style} />,
    node: <NodeJs fill="#339933" width={iconSize} style={style} />,
    jquery: <Jquery fill="#0769AD" width={iconSize} style={style} />,
    gatsby: <Gatsby fill="#663399" width={iconSize} style={style} />,
    python: <Python fill="#3776AB" width={iconSize} style={style} />,
    django: <Django fill="#092E20" width={iconSize} style={style} />,
    flask: <Flask fill="#000000" width={iconSize} style={style} />,
    spring: <Spring fill="#6DB33F" width={iconSize} style={style} />,
    coffee: <Buymeacoffee fill="#FF813F" width={iconSize} style={style} />,
    github: <Github fill="#0a0a0a" width={iconSize} style={style} />,
    linkedin: <Linkedin fill="#0a0a0a" width={iconSize} style={style} />,
    twitter: <Twitter fill="#0a0a0a" width={iconSize} style={style} />,
    resume: <Portfolio fill="#0a0a0a" width={iconSize} style={style} />,
    name: <Name fill="#0a0a0a" width={iconSize} style={style} />,
    email: <Email fill="#0a0a0a" width={iconSize} style={style} />,
    send: <Send fill="#0a0a0a" width={iconSize} style={style} />,
  }

  return icons[selectedIcon] != null ? (
    icons[selectedIcon]
  ) : (
    <Exclamation color="#ff0000" width={iconSize} />
  )
}
