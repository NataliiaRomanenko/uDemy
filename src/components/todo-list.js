import React from 'react';
import ToDoListItem from "./todo-list-item";

const ToDoList = ()=>{
    const items = ['Learn', 'Drink Coffe']
    return(
        <ul>
            <li><ToDoListItem label = "Drink coffe" /></li>
            <li><ToDoListItem
                label = "Learn React"
                important /></li>

        </ul>
    )
};
 export default ToDoList;
