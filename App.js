import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Alert, TouchableOpacity } from 'react-native';

import { Login } from './src/pages/login';


const App = () => {
  return (
    <View style={styles.bodyContainer}>
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({

  bodyContainer: {
    flex: 1,
  }
})

export default App