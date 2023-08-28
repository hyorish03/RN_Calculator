import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export enum ButtonType {
  NUMBER = 'NUMBER',
  OPERATOR = 'OPERATOR',
}

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle: object;
  buttonType: ButtonType;
}

const Colors = {
  NUMBER: ['#71717a', '#3f3f46'],
  OPERATOR: ['#f59e0b', '#b45309'],
};

function Button({ title, onPress, buttonStyle, buttonType }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: Colors[buttonType][0],
        },
        pressed && { backgroundColor: Colors[buttonType][1] },
        buttonStyle,
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: 'white',
  },
});

export default Button;
