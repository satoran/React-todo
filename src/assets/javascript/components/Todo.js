/* 
  コンポーネントの役割：FormとListsの表示を行う
  inputのvalueと、todosの初期値を持っている
  3つの関数を持っている
*/

import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import Lists from './Lists'

class Todo extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        value: '',   //inputの中身の初期値
        todos: [
          {
            value: 'example',
            date: '○月○日 14:14',
            id: 1
          }
        ]
      };
    }

    // 1-valueを更新する関数   初期値''に入力された文字列が入る（更新）
    handleValue(val) {
      console.log(val)
      this.setState({
        value: val
      })
    }
    
    
    // 2-todosに追加する関数   value, date, id がこの時点で取得されて入る
    addTodos() {
      let value = this.state.value;
      let date = new Date();
      let id = this.state.todos[this.state.todos.length - 1].id + 1
      // this.state.todos.length - 1 は、一番後ろの配列を示している

      console.log(date)

      const todos = this.state.todos
      todos.push({value: value, date: `${date.getMonth()+1}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes()}`, id: id})
      // 配列の一番後ろに新たなオブジェクトを追加する

      this.setState({
        value: '',
        todos: todos
      })
      // 新たなstateを作り出す（stateを更新する）

    };
    /* 
      ※※dateは文字列として入れる※※　new Date();はひとつのオブジェクトを形成するため、
    　単純にdate: dateの形にするとエラーが出る。オブジェクトinオブジェクト
    */

    // 3-任意のtodoを削除する関数
    closeTodos(i) {
      console.log(i)
      console.log(this.state.todos)

      const todo = [...this.state.todos]　// [...]は配列をコピーする書き方
      todo.splice(i,1);
      
      console.log(todo)
      

     /* ダメな書き方 const todo = this.state.todos.splice(i,1);
        これだと今ある配列から、(i,1)で指定した要素のみ取り出した配列ができてしまう＝指定した配列以外消えてしまう。（やりたいことと逆）
        →配列をコピーして、それから todo.splice(i,1);と書くことで、
        指定した要素を削除した新しい配列を渡すことができる。
     */

      this.setState({
        todos: todo
      });
      //　Xが押されたtodoを配列から削除し、新たな配列を作るもの
    };


    render() {
      return (
        <div>
          <Form 
            value={this.state.value} 
            handleChange={this.handleValue.bind(this)} 
            handleClick={this.addTodos.bind(this)}
          />
          <Lists 
            todos={this.state.todos}
            handleClick={this.closeTodos.bind(this)}
          />
        </div>
        // ※※thisで宣言された関数を別のクラスに渡すときは、.bind(this)をつける※※（考えないで覚える）
        // 上で宣言したinputのvalueの値を更新するイベント（関数）を呼び出すときは、onもしくはhandleでプロパティをつける
        // handleは内部で行うイベント、onはユーザーが行うイベント
    );
  }
}


export default Todo;

