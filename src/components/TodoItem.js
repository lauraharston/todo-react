import React from 'react'

function TodoItem(props) {
    return(
        <div className='todo-item'>
            <input type="checkbox"></input>
            <p>{props.data.text}</p>   
        </div>
    )
}

export default TodoItem