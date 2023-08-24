import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonType } from './components/Button.tsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="1"
        onPress={() => {}}
        buttonStyle={{ width: 100, height: 100 }}
        buttonType={ButtonType.Number}
      />
      <Button
        title="0"
        onPress={() => {}}
        buttonStyle={{ width: 200, height: 100 }}
        buttonType={ButtonType.Number}
      />
      <Button
        title="="
        onPress={() => {}}
        buttonStyle={{ width: 100, height: 100 }}
        // buttonType={ButtonType.Operator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'green',
  },
  error: {
    color: 'red',
  },
});
