import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <StyledTitle to="/">{siteTitle}</StyledTitle>
      </h1>
    </div>
  </StyledHeader>
)

const StyledTitle = styled(Link)`
  color: white;
  text-decoration: none;
`

const StyledHeader = styled.header`
  background: #fff040;
  margin-bottom: 1.45rem;
`

export default Header
