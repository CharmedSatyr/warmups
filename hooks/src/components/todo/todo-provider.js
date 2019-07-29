import React, { Component } from 'react'
import uuid from 'uuid/v4'

export const ToDoContext = React.createContext()

class ToDoProvider extends Component {
  constructor(props) {
    super(props)
    const { addItem, handleInputChange, saveItem, toggleComplete, toggleEdit, updateItem } = this
    this.state = {
      addItem,
      editing: false,
      handleInputChange,
      item: {},
      saveItem,
      todoList: [],
      toggleComplete,
      toggleEdit,
      updateItem,
    }
  }

  addItem = e => {
    e.preventDefault()
    e.target.reset()
    this.setState({ todoList: [...this.state.todoList, this.state.item] })
  }

  handleInputChange = e => {
    console.log('e.target.value:', e.target.value)
    console.log('e.target.id:', e.target.id)
    console.log('e.target.complete:', e.target.complete)
    const item = {
      text: e.target.value,
      complete: !!e.target.complete,
    }
    item.id = e.target.id || uuid()
    this.setState({ item })
  }

  saveItem = updatedItem => {
    console.log(this.state.todoList)

    this.setState({
      todoList: this.state.todoList.map(item => (item.id === updatedItem.id ? updatedItem : item)),
      editing: false,
    })
  }

  toggleComplete = id => {
    const item = this.state.todoList.filter(i => i.id === id)[0] || {}
    if (item.id) {
      item.complete = !item.complete
      this.saveItem(item)
    }
  }

  toggleEdit = id => {
    const editing = this.state.editing === id ? false : id
    this.setState({ editing })
  }

  updateItem = e => {
    e.preventDefault()
    this.saveItem(this.state.item)
  }

  render() {
    return <ToDoContext.Provider value={this.state}>{this.props.children}</ToDoContext.Provider>
  }
}

export default ToDoProvider
