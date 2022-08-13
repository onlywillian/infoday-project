import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MainScreen() {
  const [index, setIndex] = useState(0);
  const [respondido, setRespondido] = useState(false);
  const arr = [0, 2, 3, 4, 5, 6, 7, 8, 9, 1];

  const [questoes, setQuetoes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch('https://infoday-project.herokuapp.com/quiz/question')
      let userData = await response.json();

      console.log(userData);
      return setQuetoes(userData);
    }
    fetchData();
  }, []);

  const handleItemClick = itemDeResposta => {
    setRespondido(true);

    let newIndex;

    if (index < questoes.length - 1) {
      newIndex = index + 1;
    } else {
      return;
    }

    setTimeout(() => {
      setIndex(newIndex);
      setRespondido(false);
    }, 1000);
  }

  const handleNextbuttonClick = () => {
    let newIndex;

    if (index < questoes.length - 1) {
      newIndex = index + 1;
    } else {
      return;
    }

    setTimeout(() => {
      setIndex(newIndex);
      setRespondido(false);
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.enunciado}>
        <Text>{questoes.length != 0 ? questoes[arr[index]].question : 'Carregando Pergunta...'}</Text>
      </View>

      <TouchableOpacity style={respondido && questoes[index].response == "a" ? styles.correct : styles.item} onPress={() => handleItemClick("a")}>
        <Text>{questoes.length != 0 ? questoes[arr[index]].item.a : 'a'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={respondido && questoes[index].response == "b" ? styles.correct : styles.item} onPress={() => handleItemClick("b")}>
        <Text>{questoes.length != 0 ? questoes[arr[index]].item.b : 'a'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={respondido && questoes[index].response == "c" ? styles.correct : styles.item} onPress={() => handleItemClick("c")}>
        <Text>{questoes.length != 0 ? questoes[arr[index]].item.c : 'a'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={respondido && questoes[index].response == "d" ? styles.correct : styles.item} onPress={() => handleItemClick("d")}>
        <Text>{questoes.length != 0 ? questoes[arr[index]].item.d : 'a'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
    justifyContent: 'center'
  }
});