import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Michelle</h1>
      <p>Details about me. </p>
      <Link to="/contact">Contact Me</Link>
    </Layout>
  )
}

export default AboutPage
