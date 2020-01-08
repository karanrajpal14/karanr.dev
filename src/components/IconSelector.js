import React from "react"
import {
  FaChevronRight,
  FaAndroid,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaExclamationCircle,
} from "react-icons/fa"

export const IconSelector = ({ icon }) => {
  const size = "2em"
  const icons = {
    android: <FaAndroid color="#3DDC84" size={size} />,
    chevright: (
      <FaChevronRight color="#33b5e5" style={{ verticalAlign: "bottom" }} />
    ),
    java: <FaJava color="#ED1D25" size={size} />,
    html: <FaHtml5 color="#E44D26" size={size} />,
    css: <FaCss3Alt color="#264de4" size={size} />,
    javascript: <FaJsSquare color="#f0db4f" size={size} />,
  }
  let selectedIcon = icon.toLowerCase()

  return icons[selectedIcon] != null ? (
    icons[selectedIcon]
  ) : (
    <FaExclamationCircle color="red" size={size} />
  )
}
