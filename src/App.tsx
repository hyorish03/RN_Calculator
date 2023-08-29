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
  const [formular, setFormular] = useState([]);
  // 현재 기기의 높이와 너비를 구하는 Hook
  const { height, width } = useWindowDimensions();

  const buttonWidth = (width - 5) / 4;
  console.log(formular);

  const calculate = () => {
    let calNum = 0;
    let operator = '';

    formular.forEach((value) => {
      if ([Operators.MINUS, Operators.PLUS].includes(value)) operator = value;
      else {
        // calNum = value;
        if (operator === Operators.PLUS) calNum += value;
        else if (operator === Operators.MINUS) calNum -= value;
        else calNum = value;
      }
      setResult(calNum);
      setFormular([]);
    });
  };

  const onPressNumber = (num: number) => {
    const last = formular[formular.length - 1];
    if (isNaN(last)) {
      setResult(num);
      setFormular((prev) => [...prev, num]);
    } else {
      const newNumber = (last ?? 0) * 10 + num;
      setResult(newNumber);
      setFormular((prev) => {
        prev.pop();
        return [...prev, newNumber];
      });
    }
  };

  const onPressOperator = (operator) => {
    switch (operator) {
      case Operators.CLEAR:
        setResult(0);
        setFormular([]);
        break;
      case Operators.EQUAL:
        calculate();
        break;

      default:
        const last = formular[formular.length - 1];
        console.log(last);
        if ((Operators.PLUS, Operators.MINUS).includes(last))
          console.log(operator);
        setFormular((prev) => {
          return [...prev, operator];
        });
    }
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
              onPress={() => {
                onPressOperator(Operators.EQUAL);
              }}
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
              onPressOperator(Operators.CLEAR);
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
            onPress={() => {
              onPressOperator(Operators.MINUS);
            }}
            buttonStyle={{
              width: buttonWidth,
              height: buttonWidth,
              marginBottom: 1,
            }}
            buttonType={ButtonType.OPERATOR}
          />
          <Button
            title={Operators.PLUS}
            onPress={() => {
              onPressOperator(Operators.PLUS);
            }}
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
