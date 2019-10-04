// propsでtodosとtodoを削除する関数を受け取っている

import React from 'react'
import styled from 'styled-components'


class List extends React.Component {
  render(){
    return (
      <Wrapper>
        <ListItem>{this.props.todo.date} : {this.props.todo.value}</ListItem>
        <Button onClick={() => this.props.handleClick(this.props.index)}>X</Button>
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid rgba(0,0,0,0.12);
`

const ListItem = styled.p`
  margin: 0;  
  font-size: 16px;
 `

const Button = styled.button`
  border: 1px solid rgba(255,0,0,0.8);
  border-radius: 2px;
  color: #fff;
  background-color: rgba(255,0,0,0.8);
`

export default List;