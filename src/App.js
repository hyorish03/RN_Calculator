import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Button, { ButtonType } from './components/Button.tsx';
import { useState } from 'react';

export default function App() {
  const [result, setResult] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}></View>
          <View style={styles.bottom}></View>
        </View>
        <View style={styles.operator}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  resultContainer: {
    backgroundColor: 'black',
    color: 'white',
    flex: 1,
    fontSize: 60,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  result: {
    fontSize: 60,
    color: 'white',
    paddingBottom: 30,
    paddingRight: 30,
  },
  number: { flex: 2, backgroundColor: 'white' },
  bottom: { flexDirection: 'row' },
  operator: {},
  leftPad: {},
});
