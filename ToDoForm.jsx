import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState(''); // useState to manage the input field state

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)} 
        value={taskText}
      />
      <Button
        title="Add Task"
        onPress={() => {
          addTask(taskText); // Call addTask with taskText as argument
          setTaskText(''); // Clear the input field after adding the task
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ToDoForm;
