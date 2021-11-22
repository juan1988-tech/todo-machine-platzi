import React from 'react';
import '../styles/CreateTodoButton.css';

const CreateTodoButton = () =>{
    return(
        <>
            <button 
            className="CreateTodoButton"
            onClick={() => console.log('estoy dando click')}
            >+</button>
        </>
    )
}

export { CreateTodoButton };