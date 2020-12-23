import React from 'react'

function TodoItem(props) {
    
    const handleChange = () => console.log('change')
    return(
        <div className='todo-item'>
            <input type="checkbox" 
            checked={props.item.completed} 
            onChange={() => props.handleChange(props.item.id)}

            />
            <p>{props.item.text}</p>   
        </div>
    )
}

export default TodoItem