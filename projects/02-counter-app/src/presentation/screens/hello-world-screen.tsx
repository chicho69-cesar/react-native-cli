import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HelloWorldScreenProps {
  name?: string
}

export default function HelloWorldScreen({ name = 'World!!!' }: HelloWorldScreenProps) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title} ellipsizeMode='tail'>
        Hello, {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20
  }
});
