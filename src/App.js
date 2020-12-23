import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './todosData'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos : todosData
    }
  }
  render() {
    const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
    return (
      <div className='todo-list'>
        {todoComponents}
      </div>
  )
  }
  
}

export default App 