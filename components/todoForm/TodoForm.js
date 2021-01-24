import React, { useState } from 'react'

const TodoForm = (props) => {
    const [value, setValue] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!value) return;
        props.addTodo(value)
        setValue("")
    }
    return (
        <form onSubmit={handleSubmit} className="app__form">
            <input
                type="text"
                className="app__input" 
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}

export default TodoForm;