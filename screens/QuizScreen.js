import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MainScreen() {
  const [index, setIndex] = useState(0);
  const [respondido, setRespondido] = useState(false);
  const [correto, setCorreto] = useState(false);

  const questoes = [
    {
      question: 'vc é gay?',
      a: 'Sim',
      b: 'Talvez',
      c: 'nao',
      d: 'certeza',
      response: 'a'
    },
    {
      question: 'vc é gay manezao?',
      a: 'asdsad',
      b: 'asdsdadassad',
      c: 'asdssaad',
      d: 'asdsaaaaaaad',
      response: 'd'
    }
  ];

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      enunciado: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center'
      },
      item: {
        flex: 1,
        borderWidth: 1,
      },
      correct: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: 'green',
      },
      incorrect: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: 'red',
      }
  });

  const [styleIfCorrect, setstyleIfCorrect] = useState(styles.incorrect);

  const handleItemClick = itemDeResposta => {
    if (questoes[index].response === itemDeResposta && !respondido) {
      setRespondido(true);
      setCorreto(true);
      setstyleIfCorrect(styles.correct);
    }

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
        <Text>{questoes[index].question}</Text>
      </View>

      <TouchableOpacity style={respondido ? styleIfCorrect : styles.item} onPress={() => handleItemClick("a")}>
        <Text>{questoes[index].a}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={respondido ? styleIfCorrect : styles.item} onPress={() => handleItemClick("b")}>
        <Text>{questoes[index].b}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={respondido ? styleIfCorrect : styles.item} onPress={() => handleItemClick("c")}>
        <Text>{questoes[index].c}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={respondido ? styleIfCorrect : styles.item} onPress={() => handleItemClick("d")}>
        <Text>{questoes[index].d}</Text>
      </TouchableOpacity>
    </View>
  );
}