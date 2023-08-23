import { View, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
}

const StyledButton = ({ title }: ButtonProps) => {
  
  return (
    <View  style={styles.btn}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  }
});

export default StyledButton;