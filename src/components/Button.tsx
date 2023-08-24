import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export enum ButtonType {
  NUMBER = 'NUMBER',
  OPERATOR = 'OPERATOR',
}

type ButtonProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: object;
  buttonType: ButtonType;
};

const Colors = {
  NUMBER: ['#71717a', '#3f3f46'],
  OPERATOR: ['#f59e0b', '#b45309'],
};

function Button({ title, onPress, buttonStyle, buttonType }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => {
        return [
          styles.button,
          {
            backgroundColor: Colors[buttonType][pressed ? 1 : 0],
          },
          buttonStyle,
        ];
      }}
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
