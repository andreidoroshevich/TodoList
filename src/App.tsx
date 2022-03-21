import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';
import {v1} from 'uuid'

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterType = 'All' | 'Completed' | 'Active'


function App() {
    //BLL:
    const todoListTitle_1: string = "What to learn"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS/ES6", isDone: true},
        {id: v1(), title: "React", isDone: false},
    ])


    const removeTask = (id: string) => {
        const filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks) //всегда только обновленные данные
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }
    const changeFilter = (filter: FilterType) => {
        setFilter(filter)
    }
    const [filter, setFilter] = useState<FilterType>('All')
    let tasksForTodoList;
    switch (filter) {
        case "Active":
            tasksForTodoList = tasks.filter(t => !t.isDone)
            break
        case "Completed":
            tasksForTodoList = tasks.filter(t => t.isDone)
            break
        default:
            tasksForTodoList = tasks
    }

    const changeStatus = (id: string, isDone: boolean) => {
        const updatedTask = tasks.map(t => t.id === id ? {...t, isDone} : t)
        setTasks(updatedTask)
    }

    //UI:
    return (
        <div className="App">
            <TodoList
                title={todoListTitle_1}
                tasks={tasksForTodoList}
                removeTask={removeTask}
                addTask={addTask}
                changeFilter={changeFilter}
                changeStatus={changeStatus}
                filter={filter}
            />
        </div>
    );
}

export default App;
