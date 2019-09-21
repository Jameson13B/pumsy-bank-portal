import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { database as db } from '../firebase'
import { Mutation } from 'react-apollo'
import { PURCHASE } from '../Apollo/Mutation'
import { confirmAlert } from 'react-confirm-alert'
import styled from 'styled-components'
import Icon from '../Components/Icon'
import ItemBtn from '../Components/StoreItemBtn'

import './alert.css'

class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      user: null
    }
  }
  componentDidMount() {
    const jwt = sessionStorage.getItem('pbp/jwt')
    const user = JSON.parse(sessionStorage.getItem('pbp/user'))
    if (!jwt || jwt === 'undefined') this.props.history.push('/login')
    if (this.state.items.length === 0) {
      db.collection('inventory')
        .get()
        .then(querySnapshot => {
          let items = []
          querySnapshot.forEach(doc => {
            const data = doc.data()
            data.id = doc.id
            items.push(data)
          })
          // Sort buttons alphabetically
          items.sort((a, b) => (a.title > b.title ? 1 : -1))
          this.setState({ items, user })
        })
        .catch(feedback => this.setState({ feedback }))
    }
  }
  render() {
    return (
      <Container>
        <Header>
          <CstmLink to='/'>
            <Icon icon='home' />
          </CstmLink>
          <h3 style={{ color: 'blue' }}>Store</h3>
        </Header>
        <Body>
          <Title>Welcome to the Store</Title>
          <Message>
            View the inventory below and make your selection. Once purchased you
            cannot change your mind.
          </Message>
          {this.state.feedback ? (
            <Feedback>{this.state.feedback}</Feedback>
          ) : null}
          <ItemList>
            {this.state.items.map((item, i) => {
              return (
                <Mutation
                  mutation={PURCHASE}
                  variables={{
                    id: this.state.user.id,
                    points: item.amount,
                    description: item.title
                  }}
                  onCompleted={data => {
                    this.setState({
                      feedback: `Succeessfully purchased!`
                    })
                  }}
                  key={i}
                >
                  {purchase => (
                    <ItemBtn
                      item={item}
                      key={i}
                      index={i}
                      handleClick={() => {
                        confirmAlert({
                          title: `Are you sure?`,
                          message: `You want to purchase a ${item.title}?`,
                          buttons: [
                            {
                              label: 'Yes',
                              onClick: () => purchase()
                            },
                            {
                              label: 'No',
                              onClick: () => {}
                            }
                          ]
                        })
                      }}
                    />
                  )}
                </Mutation>
              )
            })}
          </ItemList>
        </Body>
      </Container>
    )
  }
}

export default Store

const Container = styled.div`
  background-color: #eee;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #282c34;
`
const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 65%;
  height: 9vh;
  i {
    color: blue;
  }
`
const CstmLink = styled(Link)`
  text-decoration: none;
  color: white;
  vertical-align: middle;
  margin-right: 15px;
  :hover {
    color: #bbb;
  }
`
const Body = styled.div`
  background: lightblue;
  border: 1px solid blue;
  border-radius: 15px;
  height: 84vh
  padding: 2vh;
  width: 65%;
`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`
const Message = styled.p`
  font-size: 1.5rem;
  margin: 15px auto;
  max-width: 550px;
`
const Feedback = styled.p`
  color: red;
  font-size: 1rem;
  margin: 5px 0;
`
const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
`
