import { graphql, useStaticQuery } from "gatsby"

export const useNavbarContent = () => {
  const { allNavbarContentJson } = useStaticQuery(
    graphql`
      query NAVBAR_CONTENT_QUERY {
        allNavbarContentJson {
          nodes {
            label
            link
            subfields {
              label
              link
            }
          }
        }
      }
    `
  )
  return allNavbarContentJson
}
