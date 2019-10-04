// ButtonとTextをimport  
// propsで追加関数, input用のstateと更新関数を受け取る


import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import Button from './Button'

class Form extends React.Component {
    render(){
      return (
        <FormWrapper>
          <Text 
            value={this.props.value} 
            handleChange={this.props.handleChange} 
          />
          <Button 
            handleClick={this.props.handleClick}
          />
        </FormWrapper>
    );
  }
}

/* 
  propsに関数を渡すときは、{this.props.handleChange} この形！
  onChangeとか、onClickなどのメソッドに関数を渡すときは、
  アロー関数（例：onClick={() => props.handleClick()}）
  この形！
*/


 const FormWrapper = styled.div`
   display: flex;
   padding: 8px 16px;
   margin-top: 10px;
  `



export default Form;