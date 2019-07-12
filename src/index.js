import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ToDoList from "./components/todo-list";

const App = ()=>{
    const isLoggined = true;
    const loginBox = <p>Log in, please</p>;
    const welcomeBox = <p>Welcome Back</p>;

    return (
        <div>
            <span>{(new Date()).toString()}</span>
            { isLoggined ?
                welcomeBox
                :
                loginBox
            }

            <AppHeader/>
            <SearchPanel/>
            <ToDoList/>
    </div>
    )
};

    ReactDom.render(<App/>,
        document.getElementById('root'));
