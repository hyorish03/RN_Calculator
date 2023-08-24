import React from 'react';
import { StyleSheet, View } from 'react-native';
import StyledButton from './StyledButton';

function NumberBtn() {
  return (
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
  );
}

export const btnStyles = StyleSheet.create({
  numBtnColumn: {
    flexDirection: 'column',
  },
  numBtnRow: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  numBtnBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default NumberBtn;
