import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Contact details</p>
      <a href="https://www.google.com" target="_blank">
        Link to contact
      </a>
    </Layout>
  )
}

export default ContactPage
