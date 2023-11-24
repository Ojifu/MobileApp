
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
