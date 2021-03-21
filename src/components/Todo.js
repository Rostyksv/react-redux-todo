import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';
import {delTodo, editTodo} from '../actions';

function Todo({ todo }) {
    const [edit, setEdit] = useState(false);
    const {id, item} = todo;
    const [text, setText] = useState(item);
    const [done, setDone] = useState(false);
    console.log(text + ' now');
    function handleEdit(e) {
        e.preventDefault();
        setText(e.target.value);
    }
    useEffect(() => {
        if(edit === false && text !== item) {
            dispatch(editTodo({item: text, id}));
        }
        setText(item);
    }, [edit])

    const dispatch = useDispatch();
    return (
    <div>
    <div className="Todo">
            <h3>#{id+1}</h3>
            <input type='checkbox' onChange={() => {setDone(!done)}} className='todo-check'></input>
        <h3>{edit ? <input className="form-control" onChange={((e) => handleEdit(e))} value={text} type='text'></input> : <div style={{maxWidth:'50rem', wordWrap:'break-word'}}><span className={done ? 'todo-check-done' : ''}>{item}</span></div>}</h3>
        <div className="Todos-btns">
            <button onClick={() => setEdit(!edit)} className='btn btn-primary mr-3'>{edit ? 'Save' : 'Edit'}</button>
            <button onClick={() => dispatch(delTodo(id))} className='btn btn-danger' disabled={edit ? true : false} >Delete</button>
        </div>
    </div>
    </div>
    )
}

export default Todo;