
import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

export default function ToDoList({ tasks, toggleCompletion }) {
    return (
        <FlatList
            data={tasks}
            renderItem={({ item }) => (
                <Text
                    onPress={() => toggleCompletion(item.id)}
                    style={[
                        styles.task,
                        item.completed && styles.completedTask
                    ]}
                >
                    {item.text}
                </Text>
            )}
            keyExtractor={item => item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    completedTask: {
        textDecorationLine: 'line-through',
        color: '#cccccc',
    },
});
