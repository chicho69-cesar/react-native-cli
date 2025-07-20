import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function BoxObjectModelScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectScreen</Text> */}
      {/* <View style={styles.purpleBox} /> */}

      <View style={ styles.purpleBox }>
        <Text style={{ color: 'white' }}>Hola Mundo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    // margin: 20,
    marginHorizontal: 20,
    marginVertical: 50,
    padding: 5
  }
});
