import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Item from "../components/newsItem"

const IndexPage = props => {
  const newsEdges = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <Section>
        <SEO title="Home" />
        <Title>技術書典7で頒布しました！</Title>
        <Books>
          <BookCover>
            <Image filename="kosubook" />
          </BookCover>
          <BookCover>
            <Image filename="modalbook" />
          </BookCover>
        </Books>
      </Section>
      <Section>
        <Title>ニュース</Title>
        {newsEdges.map(edge => (
          <Item data={edge.node.frontmatter}></Item>
        ))}
      </Section>
      <Section>
        <Title>About Me</Title>
        <p>連絡・質問はこちらから</p>
        <a href="https://twitter.com/sadnessOjisan">@sadnessOjisan</a>
      </Section>
    </Layout>
  )
}

const Section = styled.div`
  margin-bottom: 4.8rem;
  font-size: 1.6rem;
`

const Title = styled.h1`
  color: #555555;
  text-align: center;
  font-size: 3.6rem;
  margin-bottom: 1.2rem;
`

const Books = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const BookCover = styled.div`
  width: 40%;
  /* height: 425px; */
`

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`

export default IndexPage
