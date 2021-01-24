import React from 'react';

const Todo = (props) => {
    let textDec = props.todos[props.index].isCompleted;
    return (
        <div
            className="app__todo"
            style={{ textDecoration: textDec ? "line-through" : "" }}
        >
            {props.children}
            <div className="app__btns-box">
                <button 
                    className="app__btn" 
                    onClick={(e) => props.completeTodo(props.index)}>
                    {textDec ? 'Completed' : 'complete'}
                </button>
                <button className="app__btn" onClick={() => props.removeTodo(props.index)}>x</button>
            </div> 
        </div>
    )
}
export default Todo;