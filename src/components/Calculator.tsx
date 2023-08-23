import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import StyledButton from './Button';
import NumberBtn, { btnStyles } from './NumberBtn';

function Calculator() {
  const [result, setResult] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.resultView}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.btnContainer}>
        {/* <NumberBtn /> */}
        <View style={btnStyles.numBtnColumn}>
          <View style={btnStyles.numBtnRow}>
            <StyledButton title="AC" />
            <StyledButton title="+/-" />
            <StyledButton title="%" />
            <StyledButton title="/" />
          </View>
          <View style={btnStyles.numBtnRow}>
            <StyledButton title="7" />
            <StyledButton title="8" />
            <StyledButton title="9" />
            <StyledButton title="X" />
          </View>
          <View style={btnStyles.numBtnRow}>
            <StyledButton title="4" />
            <StyledButton title="5" />
            <StyledButton title="6" />
            <StyledButton title="-" />
          </View>
          <View style={btnStyles.numBtnRow}>
            <StyledButton title="1" />
            <StyledButton title="2" />
            <StyledButton title="3" />
            <StyledButton title="+" />
          </View>
          <View style={[btnStyles.numBtnRow, btnStyles.numBtnBottom]}>
            <StyledButton title="0" />
            <StyledButton title="." />
            <StyledButton title="=" />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  result: {
    backgroundColor: 'pink',
    color: 'black',
    fontSize: 60,
    textAlign: 'right',
  },
  resultView: {
    width: '100%',
    height: '30%',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
  },
  btnContainer: {
    width: '100%',
    height: '70%',
    padding: 10,
    backgroundColor: 'yellow',
    justifyContent: 'flex-end',
  },
});
export default Calculator;
