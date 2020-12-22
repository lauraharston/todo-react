import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './todosData'


function App() {
  const todoComponents = todosData.map(item => <TodoItem key={item.id} data={item}/>)
    return (
        <div className='todo-list'>
          {todoComponents}
        </div>
    )
}
export default App 