import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
    const currentDate = new Date().toLocaleDateString();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>App Name: ToDo App</Text>
            <Text style={styles.text}>Developed by: Your Name</Text>
            <Text style={styles.text}>Date: {currentDate}</Text>

            {/* Optional: Button to navigate back to Home screen */}
            <Button
                title="Back to Home"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        margin: 10
    }
});
