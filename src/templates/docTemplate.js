import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./doc.module.css"

export default function Template({
                                   data // this prop will be injected by the GraphQL query below.
                                 }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  let langKey = /\/(\w{2})\//.exec(frontmatter.slug)[1]

  return (
    <Layout>
      <SEO title={frontmatter.title + " - ServerCat"}/>

      <br/>
      <div className="blog-post-container">
        <div className="blog-post">
          <p>
            <small>
            <a href={frontmatter.slug.replace('/zh/', '/en/')}
               className={styles.langLink + (langKey === 'en' ? ' active' : ' ')}>English</a>
              &nbsp; · &nbsp;
            <a href={frontmatter.slug.replace('/en/', '/zh/')}
               className={styles.langLink + (langKey === 'zh' ? ' active' : ' ')}>中文</a>
            </small>
          </p>
          <article>
            <h1>{frontmatter.title}</h1>
            <br/>
            {/*<h2>{frontmatter.date}</h2>*/}
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
