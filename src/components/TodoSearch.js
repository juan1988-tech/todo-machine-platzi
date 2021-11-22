import React from 'react';
import '../styles/TodoSearch.css';

const TodoSearch = () =>{
    const onSearchValueChange =  (event) =>{
        console.log(event.target.value)
    }
    return <input
    className="TodoSearch"
    placeholder="cortar cebollas"
    onChange={onSearchValueChange}
    />
}

export { TodoSearch }