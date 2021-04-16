import React from "react"
import { Helmet } from "react-helmet"

import "normalize.css"
import "react-awesome-slider/dist/styles.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/index.module.css"
import QRCode from "react-qr-code"


const appStoreUrl = "https://apps.apple.com/app/apple-store/id1501532023?pt=118260435&ct=web&mt=8"

const IndexPage = () => (
  <Layout>
    <SEO title="ServerCat - Server Status and SSH Client app for iOS"/>

    <Helmet>
      <meta name="apple-itunes-app" content="app-id=1501532023, app-clip-bundle-id=tech.baye.servercat.Clip, affiliate-data=myAffiliateData, app-argument=myAppArgument"/>
     </Helmet>

    <br/>

    <div>
      <h1 style={{ letterSpacing: 1, marginBottom: "1rem"}}>ServerCat</h1>
      <p className={styles.slogan}>
        > Server Status, Docker Management and SSH client for iOS.
      </p>
    </div>

    <div className={styles.download}>
      <div>
        <a style={{ height: 40, display: "inline-block", marginBottom: 10 }} href={appStoreUrl} target="_blank">
          <img height={40} src={require("../images/appstore.png")} alt=""/>
        </a>
        <br/>

        <small className={styles.downloadTip}> Free Download </small>
      </div>
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      <div style={{width: 80, height: 80}}>
        <QRCode value={appStoreUrl} size={80} style={{ justifySelf: "flex-end" }}/>
      </div>
    </div>

    {/*<hr className={styles.hr}/>*/}
    <h2 className={styles.h2}>Screenshots</h2>
    <div className={styles.previews}>
      <img
        width={230} height={497}
        src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/92/28/0d/92280d9f-a9f6-0e39-dbf2-f671a62c8458/pr_source.png/600x0w.png"
        alt=""/>
      <img
        width={230} height={497}
        src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/c2/05/c4/c205c4fc-637d-8eee-ad65-dd1535bcd0ad/pr_source.png/600x0w.png"
        alt=""/>
      <img
        width={230} height={497}
        src="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/51/34/2c/51342c24-3d60-aef7-28be-11e41c4b470a/pr_source.png/600x0w.png"/>
      <img
        width={230} height={497}
        src="https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/46/f1/04/46f104c8-ea37-b8ac-f2ba-61f6d42e1bf9/pr_source.png/600x0w.png"/>
    </div>
  </Layout>
)

export default IndexPage
