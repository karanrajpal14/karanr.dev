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

export const IconSelector = ({ icon, size }) => {
  let selectedIcon = icon.toLowerCase()
  let iconSize = size != undefined ? size : "2em"

  const icons = {
    android: <Android color="#3DDC84" size={iconSize} />,
    chevright: (
      <FaChevronRight color="#639" style={{ verticalAlign: "bottom" }} />
    ),
    angleright: <FaAngleDoubleRight style={{ verticalAlign: "bottom" }} />,
    java: <Java color="#ED1D25" size={iconSize} />,
    html: <Html5 color="#E34F26" size={iconSize} />,
    css: <Css3 color="#1572B6" size={iconSize} />,
    javascript: <Javascript color="#F7DF1E" size={iconSize} />,
    react: <ReactJs color="#61DAFB" size={iconSize} />,
    node: <NodeDotJs color="#339933" size={iconSize} />,
    jquery: <Jquery color="#0769AD" size={iconSize} />,
    gatsby: <Gatsby color="#663399" size={iconSize} />,
    python: <Python color="#3776AB" size={iconSize} />,
    django: <Django color="#092E20" size={iconSize} />,
    flask: <Flask color="#000000" size={iconSize} />,
    spring: <Spring color="#6DB33F" size={iconSize} />,
    coffee: <Buymeacoffee color="#FF813F" />,
  }

  return icons[selectedIcon] != null ? (
    icons[selectedIcon]
  ) : (
    <FaExclamationCircle color="red" size={size} />
  )
}
