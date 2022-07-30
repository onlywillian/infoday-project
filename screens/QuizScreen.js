import { View, StyleSheet, Text } from 'react-native';

export default function MainScreen() {
  const questoes = [
    {
      question: 'vc é gay?',
      a: 'asdsad',
      b: 'asdsad',
      c: 'asdsad',
      d: 'asdsad',
      response: 'a'
    }
  ]

  return (
    <View style={styles.container}>
      <Text>Quiz Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    enunciado: {
      flex: 1,
    },
    item: {
      flex: 1,
    },
});