import Layout from "../components/layout"
import SEO from "../components/seo"
import React from "react"

export default function PrivacyPage() {
  return <>
    <Layout>
      <SEO title="Privacy Policy - ServerCat"/>

      <div>
        <h1 style={{ letterSpacing: 1, marginBottom: "1rem"}}>Privacy Policy</h1>

        <h2>Will my personal data leave my device? </h2>
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
          We use firebase to track usage data, these data are not related to your personal identifiers.
        </p>
      </div>
    </Layout>
  </>

}
