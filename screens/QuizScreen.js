import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function QuizScreen({ route, navigation }) {
  const { money, nameUser } = route.params;
  const [userMoney, setUserMoney] = useState(money);

  const [i, setIndex] = useState(0);
  const [respondido, setRespondido] = useState(false);

  const [questoes, setQuetoes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch('https://infoday-project.herokuapp.com/quiz/question')
      let userData = await response.json();

      userData.sort(function (a, b) {
        if (a.index > b.index) {
          return 1;
        }
        if (a.index < b.index) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

      console.log(userData);
      return setQuetoes(userData);
    }
    fetchData();
  }, []);

  const handleItemClick = itemDeResposta => {
    if (itemDeResposta == questoes[i].response) {
      let newMoney = userMoney + 100;

      setUserMoney(newMoney);
    }

    setRespondido(true);

    let newIndex;

    if (i < questoes.length - 1) {
      newIndex = i + 1;
    } else {
      async function putData() {
        let data = await fetch(`https://infoday-project.herokuapp.com/usuarios/update/${nameUser}`, {
            method:'PUT',
            headers: new Headers({'content-type': 'application/json'}),
            body:JSON.stringify({
                money: userMoney,
                FinishedQuiz: true,
            }),
        })
      }
      putData()

      return navigation.goBack();
    }

    setTimeout(() => {
      setIndex(newIndex);
      setRespondido(false);
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.enunciado}>
        <Text>{questoes.length != 0 ? questoes[i].question : 'Carregando Perguntas...'}</Text>
      </View>

      <TouchableOpacity style={respondido && questoes[i].response == "a" ? styles.correct : styles.item} onPress={() => handleItemClick("a")}>
        <Text>{questoes.length != 0 ? questoes[i].item.a : 'a'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={respondido && questoes[i].response == "b" ? styles.correct : styles.item} onPress={() => handleItemClick("b")}>
        <Text>{questoes.length != 0 ? questoes[i].item.b : 'b'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={respondido && questoes[i].response == "c" ? styles.correct : styles.item} onPress={() => handleItemClick("c")}>
        <Text>{questoes.length != 0 ? questoes[i].item.c : 'c'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={respondido && questoes[i].response == "d" ? styles.correct : styles.item} onPress={() => handleItemClick("d")}>
        <Text>{questoes.length != 0 ? questoes[i].item.d : 'd'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdd4ff',
    padding: 20,
  },
  enunciado: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  item: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center'
  },
  correct: {
    flex: 1,
    backgroundColor: 'green',
    marginTop: 10,
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
  }
});