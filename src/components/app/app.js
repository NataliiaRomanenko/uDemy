import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import ToDoList from "../todo-list";
import AddItem from "../add-item";
import './app.css'




export default class App extends Component{
    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make Awesome'),
            this.createTodoItem('Have a lunch')
        ],
        term:'',
    };

    createTodoItem (label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    };


    deleteItem = (id) => {
       this.setState(({todoData}) => {
           const  idx = todoData.findIndex((el) => el.id === id);
           //todoData.splice(idx, 1); //удаляем элемент, так писать не стоит т.к. мы изменяем существующий массив
           const before = todoData.slice(0, idx); // принимает 2 аргумента начало и конец сегмента. Слайс не удаляет исходный массив.
           const after = todoData.slice(idx + 1); // начинает с какого места и по конца т.к. не указываем 2й аргумент
           const newArr = [...before, ...after]; // спред оператор объединяет в один массив

           return {
               todoData: newArr
           };
       });
    };

    addItem = (text) => {

        const newItem = this.createTodoItem(text);

        // add newItem to array
        this.setState(({todoData}) => {
                const newArray = [...todoData, newItem];
                return {
                    todoData: newArray
                }
        })
    };

    toggleProperty (arr, id, propName){
        const  idx = arr.findIndex((el) => el.id === id);
        const  oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        //construct new array
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];

    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return{
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        })
    };
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
           return{
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        })
    };
    onSearchChange = (term) => {
        this.setState({
            term: term
        })
    }
    search = (items, term) => {
        if (term.length === 0){
            return items;
        }
       return items.filter((item) => {
         return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }


    render() {

    const {todoData, term} = this.state;
    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
        <div className="todo-app">
            <span>{(new Date()).toString()}</span>


            <AppHeader  toDo={todoCount}
                        done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel
                    onSearchChange={this.onSearchChange}/>
                <ItemStatusFilter />
            </div>
            <ToDoList
                todos = {visibleItems}
                onDeleted = {this.deleteItem}
                onToggleImportant = {this.onToggleImportant}
                onToggleDone = {this.onToggleDone}
            />
            <AddItem onItemAdded = {this.addItem}/>
        </div>
    )
}


};


