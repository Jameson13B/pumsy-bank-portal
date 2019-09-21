import React from 'react'
import styled from 'styled-components'

const ItemBtn = props => {
  return (
    <Container onClick={props.handleClick}>
      <Title>{props.item.title}</Title>
      <Description>{props.item.description}</Description>
      <Amount>{props.item.amount}</Amount>
    </Container>
  )
}

export default ItemBtn

const Container = styled.div`
  border: 1px solid blue;
  border-radius: 15px;
  flex-shrink: 0;
  margin-bottom: 15px;
  max-width: 550px;
  width: 100%;
  :last-child {
    margin-bottom: 0;
  }
  :hover {
    background: #3ca1c3;
  }
  p {
    margin: 10px 0;
  }
`
const Title = styled.p`
  font-size: 1.5rem;
`
const Description = styled.p`
  font-size: 1rem;
  font-style: italic;
`
const Amount = styled.p`
  font-size: 1.5rem;
`
