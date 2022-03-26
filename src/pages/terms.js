import Layout from "../components/layout"
import SEO from "../components/seo"
import React from "react"

export default function TermsPage() {
  return <>
    <Layout>
      <SEO title="Terms of Service - ServerCat"/>

      <div>
        <h1 style={{ letterSpacing: 1, marginBottom: "1rem"}}>Terms of Service</h1>

        <h2>Will my data leave my device? </h2>
        <ol>
          <li>
            All data are stored locally, we don't upload any data to our servers.
          </li>
          <li>
            Synchronization uses Apple iCloud, the data goes directly to the iCloud server.
          </li>
        </ol>

        <h2> Data Collected by ServerCat </h2>

        <p>
          We use firebase to track basic usages, such as daily active users and purchases.
        </p>
      </div>
    </Layout>
  </>
}
