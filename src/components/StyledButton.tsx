import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
}

const StyledButton = ({ title }: ButtonProps) => {
  return (
    <View style={styles.btn}>
      <TouchableOpacity onPress={()=>{console.log('clicked!')}} >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
});

export default StyledButton;
