// propsで、todosに追加する関数を受け取っている

import React from 'react'
import styled from 'styled-components'
import Text from './Text';

function Button(props) {
    return (
      <ButtonWrapper onClick={() => props.handleClick()}>
        登録する
      </ButtonWrapper>
    );
}

const ButtonWrapper = styled.button`
  background-color: #248;
  color: #fff;
  border-style: none;
  border-radius: 5px;
`


export default Button;

// クラスを関数で宣言するとき（stateがない時のみ）
// const Button = () => {
//     return (
//         <Inner>
//             button
//         </Inner>
//     )
// }

// styled
// const Inner = styled.a`
//     border: 1px solid #000;
// `

