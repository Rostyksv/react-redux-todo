import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {clearTodos} from '../actions';

function Todos() {
    const todos = useSelector(state => state.newTodos);
    console.log(todos)
    const dispatch = useDispatch();
    return (
        <div className='mt-5'>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo}/>
            })}
        {todos.length > 0 && <div className='clear-btn'> <button onClick={() => {dispatch(clearTodos())}} className='btn btn-danger'>Clear Todos</button></div>}
        </div>
    )
}

export default Todos;