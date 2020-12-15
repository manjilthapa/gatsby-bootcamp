import React from "react"

import Footer from "./footer"
import Header from "./header"

import styled from "styled-components"
import "../styles/index.scss"

const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex-grow: 1;
`

const Layout = props => {
  return (
    <Container>
      <Content>
        <Header />
        {props.children}
      </Content>
      <Footer />
    </Container>
  )
}

export default Layout
