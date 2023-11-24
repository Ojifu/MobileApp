// src/screens/AboutScreen.jsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
    return (
        <MainLayout>
            <View style={styles.container}>
                <Text style={styles.text}>App Name: ToDo App</Text>
                <Text style={styles.text}>Developed by: Your Name</Text>
                <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
            </View>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default AboutScreen;
