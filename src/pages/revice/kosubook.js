import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default () => {
  return (
    <Layout>
      <Section>
        <SEO title="revice" />
        <Title>
          フロントエンド実装工数をなるべく下げるタメの本 <br></br>修正箇所一覧
        </Title>
        <ul>
          {/* <li>
            p1
            <ul style={{ marginLeft: "2.4rem" }}>
              <li>誤</li>
              <li>正</li>
            </ul>
          </li> */}
          該当箇所はありません。
        </ul>
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
