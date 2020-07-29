import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Michelle Lock</h1>
      <h2>UX Designer and Full-Stack Developer living in Hong Kong</h2>
      <p>Need a Developer? <Link to="/contact">Contact</Link></p>
    </Layout>
  )
}

export default IndexPage