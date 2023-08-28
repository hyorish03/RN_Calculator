import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Button, { ButtonType } from './components/Button.tsx';
import { useState } from 'react';

export default function App() {
  const [result, setResult] = useState(0);
  // 현재 기기의 높이와 너비를 구하는 Hook
  const { height, width } = useWindowDimensions();
  const buttonWidth = width / 4;
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}>
            <Button
              title="1"
              onPress={() => {}}
              buttonStyle={{ width, height: width }}
            />
          </View>
          <View style={styles.botton}></View>
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
  botton: { flexDirection: 'row' },
  operator: {},
  leftPad: {},
});
