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
        <Title>技術書典7で頒布中</Title>
        <Books>
          <BookCover>
            <Image filename="kosubook" />
            <Text>
              本書の説明・目次は
              <NormalLink href="https://techbookfest.org/event/tbf07/circle/5138644771799040">
                こちら
              </NormalLink>
            </Text>
            <Text>
              購入は
              <NormalLink href="https://pinecan.booth.pm/items/1562438">
                こちら
              </NormalLink>
            </Text>
            <Text>
              修正は
              <StyledLink to="./revice/kosubook">こちら</StyledLink>
            </Text>
          </BookCover>
          <BookCover>
            <Image filename="modalbook" />
            <Text>
              本書の説明・目次は
              <NormalLink href="https://techbookfest.org/event/tbf07/circle/5138644771799040">
                こちら
              </NormalLink>
            </Text>
            <Text>
              購入は
              <NormalLink href="https://pinecan.booth.pm/items/1560348">
                こちら
              </NormalLink>
            </Text>
            <Text>
              修正は
              <StyledLink to="./revice/modalbook">こちら</StyledLink>
            </Text>
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
        <NormalLink href="https://twitter.com/sadnessOjisan">
          @sadnessOjisan
        </NormalLink>
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
  margin-bottom: 1.6rem;
`

const Books = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const BookCover = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 3.2rem;
  }
`

const Text = styled.p`
  margin-top: 1.6rem;
  font-size: 1.6rem;
`

const NormalLink = styled.a`
  color: #2da4d5;
`

const StyledLink = styled(Link)`
  color: #2da4d5;
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
