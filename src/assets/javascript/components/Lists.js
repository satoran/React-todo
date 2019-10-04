// Listをmap関数で複数表示するだけのコンポーネント

import React from 'react'
import styled from 'styled-components'
import List from './List'

class Lists extends React.Component {
    render(){
      return (
        <div>
          {
            this.props.todos.map((todo, i) => {
              return (
                <List 
                  index={i}
                  todo={todo}
                  handleClick={this.props.handleClick}
                />
              )
            })
          }
        </div>
    );
  }
}
// mapメソッドの覚え方：配列の長さの分だけコンポーネントを表示できる！暗記！
// mapの引数（この場合todo）には各回の中身（値）が入っている
// mapメソッドの２番目の引数で、index番号を取得できる。

export default Lists;