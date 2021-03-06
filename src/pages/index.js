import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout>
      <h1 style={{ color: `purple` }}>Hello,</h1>
      <h2>I'm Manjil, a front-end developer with specialize in React</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  )
}

export default Home
