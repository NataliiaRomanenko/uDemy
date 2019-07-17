import React from 'react';
import ToDoListItem from "./todo-list-item";
import './todo-list.css';

const ToDoList = ({todos})=>{
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return(
            <li key={item.id} className="list-group-item">
                {/*<ToDoListItem label = {item.label} important={item.important} />*/}

                {/*<ToDoListItem {...item} />*/}
                {/*если нужно передать все свойства обьекта внутрь компонента, а не перечислять их*/}

                <ToDoListItem {...itemProps}/>
                {/*передать все, кроме значания id*/}
            </li>
        )
    });

    return(
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
};
 export default ToDoList;
