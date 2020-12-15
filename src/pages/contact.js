import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
export default function ContactPage({ data }) {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>This is contact page</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
