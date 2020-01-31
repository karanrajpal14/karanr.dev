import React from "react"
import {
  FaChevronRight,
  FaAndroid,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaExclamationCircle,
  FaAngleDoubleRight,
} from "react-icons/fa"
import {
  Html5,
  Css3,
  Javascript,
  ReactJs,
  Gatsby,
  NodeDotJs,
  Jquery,
} from "@icons-pack/react-simple-icons"
import { Python, Django, Flask } from "@icons-pack/react-simple-icons"
import { Java, Android, Spring } from "@icons-pack/react-simple-icons"
import { Buymeacoffee } from "@icons-pack/react-simple-icons"

export const IconSelector = ({ icon, size, style }) => {
  let selectedIcon = icon.toLowerCase()
  let iconSize = size != undefined ? size : "2em"

  const icons = {
    android: <Android color="#3DDC84" size={iconSize} />,
    chevright: (
      <FaChevronRight color="#639" style={{ verticalAlign: "bottom" }} />
    ),
    angleright: <FaAngleDoubleRight style={{ verticalAlign: "bottom" }} />,
    java: <Java color="#ED1D25" size={iconSize} style={style} />,
    html: <Html5 color="#E34F26" size={iconSize} style={style} />,
    css: <Css3 color="#1572B6" size={iconSize} style={style} />,
    javascript: <Javascript color="#F7DF1E" size={iconSize} style={style} />,
    react: <ReactJs color="#61DAFB" size={iconSize} style={style} />,
    node: <NodeDotJs color="#339933" size={iconSize} style={style} />,
    jquery: <Jquery color="#0769AD" size={iconSize} style={style} />,
    gatsby: <Gatsby color="#663399" size={iconSize} style={style} />,
    python: <Python color="#3776AB" size={iconSize} style={style} />,
    django: <Django color="#092E20" size={iconSize} style={style} />,
    flask: <Flask color="#000000" size={iconSize} style={style} />,
    spring: <Spring color="#6DB33F" size={iconSize} style={style} />,
    coffee: <Buymeacoffee color="#FF813F" style={style} />,
  }

  return icons[selectedIcon] != null ? (
    icons[selectedIcon]
  ) : (
    <FaExclamationCircle color="red" size={size} />
  )
}
