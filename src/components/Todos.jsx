import React from 'react';
import {useDispatch} from 'react-redux';
import { useState } from 'react';
import Todo from './Todo';

const Todos = () => {

    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    const handleText = (e) => {
        setInputValue(e.target.value)
    }

    const handleAdd = (e) => {
        dispatch({type:'addTodo', payload: inputValue})
        setInputValue('')
        e.preventDefault()
        console.log(inputValue)
    }

    return (
        <main className='main'>
            <form>
                <input className='main-input' onChange={handleText} type='text' placeholder='Сделать...' value={inputValue}/>
                <button type='submit' className='submit' onClick={handleAdd}>SEND</button>
            </form>
            <div> 
                <Todo />
            </div>
        </main>
    );
};

export default Todos;