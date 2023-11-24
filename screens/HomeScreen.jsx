// src/screens/HomeScreen.jsx
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([newTask, ...tasks]);
    };

    const toggleCompletion = (id) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <MainLayout>
            <ToDoList tasks={tasks} toggleCompletion={toggleCompletion} />
            <ToDoForm addTask={addTask} />
        </MainLayout>
    );
};

export default HomeScreen;
