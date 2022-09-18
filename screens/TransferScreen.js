import { View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

import SpaceBanner from '../assets/backgrounds/BANNER_BOB_INVADERS.png';
import QuizBanner from '../assets/backgrounds/banner_quiz.png';

export default function MainScreen({route,  navigation }) {
  const { money, nameUser } = route.params;

  const handleGameButtonClick = () => {
    return Alert.alert('Game em desenvolvimento', 'Estará pronto em versões futuras!');
  };

  const handleQuizButtonClick = () => {
    return navigation.navigate('Quiz', {
      money: money,
      nameUser: nameUser
    });
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.side} onPress={handleGameButtonClick}>
          <Image source={SpaceBanner} style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.side} onPress={handleQuizButtonClick}>
          <Image source={QuizBanner} style={styles.image}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      height: '100%',
      backgroundColor: '#cdd4ff'
    },
    side: {
      flex: 1,
      justifyContent: 'center'
    },
    image: {
      height: '70%',
      width: '100%'
    }
});