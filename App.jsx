import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList'; // Import ToDoList component
import ToDoForm from './ToDoForm'; // Import ToDoForm component

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry', completed: true },
    { id: 2, text: 'Go to gym', completed: false },
    { id: 3, text: 'Walk dog', completed: true },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      const newId = tasks.length + 1; 
      setTasks([...tasks, { id: newId, text: newTask, completed: false }]);
      setNewTask(''); 
    }
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
      <ToDoForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 20, 
  },
});

export default App;