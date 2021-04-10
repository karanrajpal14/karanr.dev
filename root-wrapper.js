import { MDXProvider } from "@mdx-js/react"
import React from "react"
import { Code } from "./src/components/Code"
import { Content } from "rbx"
import "@fontsource/aleo"
import "@fontsource/cooper-hewitt"

const components = {
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace("language-", "")}
          {...props}
        />
      )
    }
  },
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={{ ...components, wrapper: Content }}>
    {element}
  </MDXProvider>
)
