import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList'; 
import ToDoForm from './ToDoForm'; 

function App() {
  // Initial state of tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry', completed: true },
    { id: 2, text: 'Go to gym', completed: false },
    { id: 3, text: 'Walk dog', completed: true },
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id: newId, text: taskText, completed: false }; 
    setTasks([...tasks, newTask]); 
  };

  // Function to toggle the completion status
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
    </SafeAreaView>
  );
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 20, 
  },
});

export default App;
