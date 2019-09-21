import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Item = props => {
  const { date, title, path } = props.data
  return (
    <Wrapper>
      <StyledTitle to={`./${path}`}>
        <Title>{title}</Title>
        <span>{date}</span>
      </StyledTitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: solid 1px #555555;
  color: #555555;
  border-radius: 4px;
  padding: 0.8rem 1.2rem;
`

const Title = styled.h2`
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const StyledTitle = styled(Link)`
  text-decoration: none;
  color: #555555;
`

export default Item
