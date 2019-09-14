import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
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
    </Section>
  </Layout>
)

const Section = styled.div`
  margin-bottom: 4.8rem;
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

export default IndexPage
