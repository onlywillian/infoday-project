import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MainScreen({ navigation }) {
  const handleGameButtonClick = () => {
    return navigation.navigate('Game');
  };

  const handleQuizButtonClick = () => {
    return navigation.navigate('Quiz');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.side} onPress={handleGameButtonClick}>
          <Text style={styles.text}>Space Invaders Game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.side} onPress={handleQuizButtonClick}>
          <Text style={styles.text}>Quiz Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      height: '100%',
    },
    side: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: 'white'
    }
});