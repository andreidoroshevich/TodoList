import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    //BLL:
    const todoListTitle_1: string = "What to learn"

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "React", isDone: false},
    ])


    // let tasks: Array<TaskType> = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS/ES6", isDone: true},
    //     {id: 3, title: "React", isDone: false},
    // ]

    const removeTask = (id: number) => {
        debugger
        const filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    //UI:
    return (
        <div className="App">
            <TodoList
                title={todoListTitle_1}
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
