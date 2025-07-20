import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function HomeworkScreen() {
  return (
    <View style={ styles.container }>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center', // comment this
    alignItems: 'center', // comment this
    flexDirection: 'row' // comment this
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white'
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    top: -50 // comment this
  },
  orangeBox: {
    backgroundColor: '#F0A23B'
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    top: 50 // comment this
  },
});
