import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import Layout from "./layout"

const Header = ({ siteTitle }) => (
  <div
    className={styles.newHeader}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: 960,
      margin: "1rem auto",
      padding: "0 1rem"
    }}>
    <Link to={"/"}>
      <img width={40}
           style={{ borderRadius: 10, marginRight: "1rem", border: '1px solid #333' }}
        // src="https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/01/f5/d2/01f5d200-68d1-7734-a01d-945830405327/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.png"
           src="https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/01/f5/d2/01f5d200-68d1-7734-a01d-945830405327/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.png"
           alt=""/>
    </Link>

    <Link to={"/en/docs/"}>
      Docs
    </Link>

    <Link to={"/en/faq/"}>
      FAQ
    </Link>
  </div>
  // <header
  //   className={styles.header}
  // >
  //   <nav
  //     className={styles.headerNav}
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `0 1.0875rem`,
  //     }}
  //   >
  //     <h1 className={styles.branding}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //     <Link
  //       to="/"
  //     >
  //       Docs
  //     </Link>
  //   </nav>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
