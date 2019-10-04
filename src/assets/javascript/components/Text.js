// propsで、更新関数とvalueを受け取っている。

import React from 'react'
import styled from 'styled-components'
class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Input 
          onChange={(e) => this.props.handleChange(e.target.value)} 
          value={this.props.value}>
        </Input>
      </div>
    );
  }
}

const Input = styled.input`
  margin-right: 15px;
  border-radius: 2px;
`

// e.target.valueの部分は、入力された値のみ取り出される。この場合は文字列（引数：val）が入る

export default Text;