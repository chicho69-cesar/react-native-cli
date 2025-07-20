import { View, Text } from 'react-native';
import { FAB } from 'react-native-paper';
import React, { useState } from 'react';
import Icon from '@react-native-vector-icons/ionicons';

import { globalStyles } from '../theme/global.style';

export default function CounterM3Screen() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{counter}</Text>

      <FAB
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        style={globalStyles.fab}
        // label='+1'
        // icon='add'
        icon={() => <Icon name='add' size={24} />}
      />
    </View>
  );
}