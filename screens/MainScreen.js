import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

import FooterView from '../components/FooterView';
import Button from '../components/ButtonView';

import JorginhoSkin from '../assets/player_skins/jorginho_grande.gif';
import NinaSkin from '../assets/player_skins/NINA_GRANDE.gif';
import JPSkin from '../assets/player_skins/jp_grande.gif';
import JoberSkin from '../assets/player_skins/jober_melo_pinto.gif';
import BobSkin from '../assets/player_skins/fantasia_bob-export-grande.gif';

export default function MainScreen({ route, navigation }) {
  const arr = [JorginhoSkin, NinaSkin, BobSkin, JPSkin, JoberSkin];
  const [skinIndex, setSkinindex] = useState(0);
  const { nameUser } = route.params;

  async function getData() {
    let res = await fetch(`https://infoday-project.herokuapp.com/usuarios/${nameUser}`);
    let data = await res.json();

    console.log(data);

    setSkinindex(data.SkinAtual);
  }

  useEffect(() => { // Criar botão recarregar
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Button iconName={'update'} press={getData}/>
      </TouchableOpacity>
      <View style={
            {
                flex: 5,
                alignItems: 'center',
                justifyContent: 'center',
            }
            }>
            <Image style={styles.image} source={arr[skinIndex]} />
        </View>
      <FooterView route={route} navigation={ navigation }/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#cdd4ff',
      justifyContent: 'center',
      height: '100%',
    },
    image: {
      height: '80%',
      width: '70%',
    },
    button: {
      position: 'absolute',
      top: 20,
      right: 20
    }
});