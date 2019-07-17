import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import ToDoList from "../todo-list";
import React from "react";
import './app.css'

const App = ()=>{
    const isLoggined = true;
    const loginBox = <p>Log in, please</p>;
    const welcomeBox = <p>Welcome Back</p>;

    const todoData = [
        {id: 1, label: 'Drink coffee', important: false},
        {id: 2, label: 'Make Awesome', important: true},
        {id: 3, label: 'Have a lunch', important: false},
    ];

    return (
        <div className="todo-app">
            <span>{(new Date()).toString()}</span>
            { isLoggined ? welcomeBox : loginBox }

            <AppHeader  toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter />
            </div>
            <ToDoList todos = {todoData}/>
        </div>
    )
};

export default App;
