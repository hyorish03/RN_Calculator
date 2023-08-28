import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Button, { ButtonType } from './components/Button';
import { useState } from 'react';

enum Operators {
  CLEAR = 'c',
  MINUS = '-',
  PLUS = '+',
  EQUAL = '=',
}

export default function App() {
  const [result, setResult] = useState(0);
  // 현재 기기의 높이와 너비를 구하는 Hook
  const { height, width } = useWindowDimensions();
  const buttonWidth = (width - 5) / 4;

  const onPressNumber = (num: number) => {
    setResult((prev) => prev * 10 + num);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result.toLocaleString()}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => {
              return (
                <Button
                  key={index}
                  title={num.toString()}
                  onPress={() => {
                    onPressNumber(num);
                  }}
                  buttonStyle={{
                    width: buttonWidth,
                    height: buttonWidth,
                    marginTop: 1,
                    marginRight: 1,
                  }}
                  buttonType={ButtonType.NUMBER}
                />
              );
            })}
          </View>
          <View style={styles.botton}>
            <Button
              title="0"
              onPress={() => {
                onPressNumber(0);
              }}
              buttonStyle={{
                width: buttonWidth * 2,
                height: buttonWidth,
                marginBottom: 1,
              }}
              buttonType={ButtonType.NUMBER}
            />
            <Button
              title={Operators.EQUAL}
              onPress={() => {}}
              buttonStyle={{
                width: buttonWidth,
                height: buttonWidth,
                marginBottom: 1,
              }}
              buttonType={ButtonType.OPERATOR}
            />
          </View>
        </View>
        <View style={styles.operator}>
          <Button
            title={Operators.CLEAR}
            onPress={() => {
              setResult(0);
            }}
            buttonStyle={{
              width: buttonWidth,
              height: buttonWidth,
              marginBottom: 1,
            }}
            buttonType={ButtonType.OPERATOR}
          />
          <Button
            title={Operators.MINUS}
            onPress={() => {}}
            buttonStyle={{
              width: buttonWidth,
              height: buttonWidth,
              marginBottom: 1,
            }}
            buttonType={ButtonType.OPERATOR}
          />
          <Button
            title={Operators.PLUS}
            onPress={() => {}}
            buttonStyle={{
              width: buttonWidth,
              height: buttonWidth * 2,
              marginBottom: 1,
            }}
            buttonType={ButtonType.OPERATOR}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    // justifyContent: 'center',
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
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  result: {
    fontSize: 60,
    color: 'white',
    paddingBottom: 30,
    paddingRight: 30,
  },
  number: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
  },
  botton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  operator: { flex: 1 },
  leftPad: { flex: 3 },
});
