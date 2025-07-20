import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>

      <Button
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        mode='contained'
      >
        Incrementar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
