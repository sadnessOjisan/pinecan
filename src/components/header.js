import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <StyledTitle to="/">{siteTitle}</StyledTitle>
      </h1>
    </div>
  </StyledHeader>
)

const StyledTitle = styled(Link)`
  color: #a7721d;
  text-decoration: none;
  font-weight: bold;
  font-size: 2.4rem;
`

const StyledHeader = styled.header`
  background: #fff040;
  margin-bottom: 1.45rem;
`

export default Header
