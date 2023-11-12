import React, { useState } from 'react';
import ToDoList from './ToDoList'; // Import the ToDoList component

function App() {
  // Initialize the state with an array of tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <><SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView></>
  );
}

export default App;