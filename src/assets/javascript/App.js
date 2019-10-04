// コンポーネントの役割：Todoコンポーネントの表示のみを行う

import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import configureStore from './store'

import Todo from './components/Todo'

export default function App() {
  return (
    <Wrapper>
      <TitleWrapper>
        <H1>ToDo List</H1>
      </TitleWrapper>
        <Todo /> 
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50vw;
`

const TitleWrapper = styled.div`
  background-color: #4169e1;
  border-radius: 2px;
`

const H1 = styled.h1`
  color: #fff;
  padding: 8px 16px;
  margin: 0;
 `