import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Button } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Do laundry', completed: true },
        { id: 2, text: 'Go to gym', completed: false },
        { id: 3, text: 'Walk dog', completed: true },
    ]);

    const addTask = (taskText) => {
        const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
        const newTask = { id: newId, text: taskText, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleCompletion = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ToDoList tasks={tasks} toggleCompletion={toggleCompletion} />
            </ScrollView>
            <ToDoForm addTask={addTask} />

            {/* Button to navigate to About screen */}
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 20, 
    },
});
