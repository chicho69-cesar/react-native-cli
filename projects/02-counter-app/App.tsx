import Ionicons from '@react-native-vector-icons/ionicons';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

// import HelloWorldScreen from './src/presentation/screens/hello-world-screen';
// import CounterScreen from './src/presentation/screens/counter-screen';
// import CounterM3Screen from './src/presentation/screens/counter-m3-screen';
// import BoxObjectModelScreen from './src/presentation/screens/box-object-model-screen';
// import DimensionsScreen from './src/presentation/screens/dimensions-screen';
// import PositionScreen from './src/presentation/screens/positions-screen';
// import FlexScreen from './src/presentation/screens/flex-screen';
// import FlexDirectionsScreen from './src/presentation/screens/flex-direction-screen';
import HomeworkScreen from './src/presentation/screens/homework-screen';

function App() {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <Ionicons {...props} />,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name='Cesar Villalobos Olmos' /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionsScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionsScreen /> */}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
