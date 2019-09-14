import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const date = new Date(frontmatter.date)
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <Title>{frontmatter.title}</Title>
          <DateText>{`${date.getFullYear()}/${date.getMonth() +
            1}/${date.getDate()}`}</DateText>
          <News dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

const Title = styled.h1`
  color: #555555;
  text-align: center;
  font-size: 3.6rem;
  margin-bottom: 1.2rem;
`

const DateText = styled.span`
  font-size: 1.4rem;
  color: #555555;
`

const News = styled.div`
  color: #555555;
  margin-top: 1.6rem;
  > p {
    font-size: 1.6rem;
  }
`

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
