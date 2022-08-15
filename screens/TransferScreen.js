import { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

import SpaceBanner from '../assets/backgrounds/BANNER_BOB_INVADERS.png';
import QuizBanner from '../assets/backgrounds/banner_quiz.png';

export default function MainScreen({route,  navigation }) {
  const { money, nameUser } = route.params;
  const [finQuiz, setFinQuiz] = useState(false);

  const handleGameButtonClick = () => {
    return Alert.alert('Game em desenvolvimento', 'Estará pronto em versões futuras!');
  };

  const handleQuizButtonClick = () => {
    return navigation.navigate('Quiz', {
      money: money,
      nameUser: nameUser
    });
  };

  async function getData() {
    let res = await fetch(`https://infoday-project.herokuapp.com/usuarios/${nameUser}`);
    let data = await res.json();

    setFinQuiz(data.FinishedQuiz);
  }

  useEffect(() => { // Criar botão recarregar
    getData();
  }, []);

  useEffect(() => { // Criar botão recarregar
    getData();
  }, [finQuiz]);

  return (
    <View style={styles.container}>
      {
      finQuiz == false ? 
      <>
        <TouchableOpacity style={styles.side} onPress={handleGameButtonClick}>
          <Image source={SpaceBanner} style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.side} onPress={handleQuizButtonClick}>
          <Image source={QuizBanner} style={styles.image}/>
        </TouchableOpacity>
      </>
      :
      <>
        <TouchableOpacity style={styles.side} onPress={handleGameButtonClick}>
          <Image source={SpaceBanner} style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.side} onPress={() => Alert.alert('Você já terminou o quiz', 'Não pode ser feito duas vezes!')}>
          <Image source={QuizBanner} style={styles.image}/>
        </TouchableOpacity>
      </>
      }
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