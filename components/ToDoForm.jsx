import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ToDoForm({ addTask }) {
    const [text, setText] = useState('');

    const handleAddTask = () => {
        addTask(text);
        setText('');
    };

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Add a new task"
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    input: {
        flex: 1,
        padding: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
    },
});
