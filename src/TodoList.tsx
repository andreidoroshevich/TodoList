import React, {useState} from 'react';
import {FilterType, TaskType} from "./App";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TaskList from "./TaskList";
import './index.css';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    addTask: (title: string) => void
    changeFilter: (filter: FilterType)=>void
    changeStatus: (id: string, isDone: boolean)=>void
    filter: FilterType
}

const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>('')
    let [error, setError] = useState<boolean>(false)


    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim())
    } else {
            setError(true)
        }
        setTitle('')

    }

    // onKeyPressAddTask
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div className={'main'}>
                <input className={error ? 'error' : ''} value={title} onChange={(e) => {
                    setTitle(e.currentTarget.value);
                    setError(false)
                }}
                       onKeyPress={(e) =>{
                           if (e.key === 'Enter') {
                               addTask()
                           }
                       } }
                />
                <Button title={"+"} onClickHandler={addTask}/>
            </div>
            {error && <div className={'error-message '}>Title is required</div>}

            <div className={'task'}>
                <TaskList tasks={props.tasks}
                          removeTask={props.removeTask}
                          changeStatus={props.changeStatus}
                />
            </div>
            <div className={'filter_button'}>
                <Button className={props.filter === 'All' ? 'active-filter' : ''} onClickHandler={()=>props.changeFilter("All")} title={"All"}/>
                <Button className={props.filter === 'Active' ? 'active-filter' : ''} onClickHandler={()=>props.changeFilter("Active")} title={"Active"}/>
                <Button className={props.filter === 'Completed' ? 'active-filter' : ''} onClickHandler={()=>props.changeFilter("Completed")} title={"Completed"}/>
            </div>
        </div>
    );
};

export default TodoList;