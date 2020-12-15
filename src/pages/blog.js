import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blogs</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage
