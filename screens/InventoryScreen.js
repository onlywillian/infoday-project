import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useEffect, useState } from 'react';

import Button from '../components/ButtonView';
import backIcon from '../assets/icons/back.png';
import coinIcon from '../assets/icons/MOEDA.png';

import JorginhoSkin from '../assets/player_skins/jorginho_grande.gif';
import NinaSkin from '../assets/player_skins/NINA_GRANDE.gif';
import JPSkin from '../assets/player_skins/jp_grande.gif';
import JoberSkin from '../assets/player_skins/jober_melo_pinto.gif';
import BobSkin from '../assets/player_skins/fantasia_bob-export-grande.gif';
import AlienVerSkin from '../assets/player_skins/alien_inimigo_vermelho-export.gif';
import AlienSkin from '../assets/player_skins/alien_inimigo-export.gif';
import DemonSkin from '../assets/player_skins/1_inimigo_grande.gif';
import FrogSkin from '../assets/player_skins/respitarion.gif';

import nextbt from '../assets/icons/next.png';
import backbt from '../assets/icons/return.png';


export default function InvenctoryScreen({ route, navigation }) {
    var [index, setindex] = useState(0);
    const { skinAtual, nameUser } = route.params;
    const [money, setMoney] = useState(0);

    const info = [
        {
            skinName: 'Jorginho',
            price: 0,
            url: JorginhoSkin,
        },
        {
            skinName: 'Nina',
            price: 0,
            url: NinaSkin,
        },
        {
            skinName: 'Bob',
            price: 500,
            url: BobSkin,
        },
        {
            skinName: 'João Pedro',
            price: 900,
            url: JPSkin,
        },
        {
            skinName: 'Jober Melo',
            price: 900,
            url: JoberSkin,
        },
        {
            skinName: 'Alien Vermelho',
            price: 100,
            url: AlienVerSkin,
        },
        {
            skinName: 'Alien',
            price: 100,
            url: AlienSkin,
        },
        {
            skinName: 'Demon',
            price: 100,
            url: DemonSkin,
        },
        {
            skinName: 'Frog',
            price: 100,
            url: JoberSkin,
        },
    ]

    async function getData() {
        let res = await fetch(`https://infoday-project.herokuapp.com/usuarios/${nameUser}`);
        let data = await res.json();
    
        setMoney(data.money);
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [money]);

    const handleBackIconClick = () => {
        return navigation.goBack();
    }

    const handleNextButtonClick = () => {
        if (index < info.length - 1) {
            const newIndex = index + 1;
            return setindex(newIndex);
        } else {
            return;
        }
    }

    const handleBackButtonClick = () => {
        if (index > 0) {
            const newIndex = index - 1;
            return setindex(newIndex);
        } else {
            return;
        }
    }

    const handlePurchaseClick = (price, i) => {
        if (price == 0) {
            async function putData() {
                let data = await fetch(`https://infoday-project.herokuapp.com/usuarios/update/${nameUser}`, {
                    method:'PUT',
                    headers: new Headers({'content-type': 'application/json'}),
                    body:JSON.stringify({
                        SkinAtual: i
                    }),
                })
            }
            putData()
        } else {
            if (money >= price) {
                let newMoney = money - price;

                async function putData() {
                    let data = await fetch(`https://infoday-project.herokuapp.com/usuarios/update/${nameUser}`, {
                        method:'PUT',
                        headers: new Headers({'content-type': 'application/json'}),
                        body:JSON.stringify({
                            SkinAtual: i,
                            money: newMoney
                        }),
                    })
                }
                putData()
            } else {
                Alert.alert('Sem money');
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.icons}>
                <Button image={backIcon} press={handleBackIconClick}/>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={coinIcon} style={{ height: 50, width: 50 }}/>
                    <Text style={{ fontSize: 20, marginLeft: 10 }}>{money}</Text>
                </View>
            </View>

            <View style={styles.skinName}>
                <Text style={{ color: 'white' }}>{info[index].skinName}</Text>
            </View>

            <View style={styles.itensArea}>
                <TouchableOpacity style={styles.backAndNextButtons} onPress={handleBackButtonClick}>
                    <Image source={backbt} style={styles.backAndNextButtons}/>
                </TouchableOpacity>

                <Image source={info[index].url} style={{ height: '70%', width: '70%' }}/>

                <TouchableOpacity style={styles.backAndNextButtons} onPress={handleNextButtonClick}>
                    <Image source={nextbt} style={styles.backAndNextButtons}/>
                </TouchableOpacity>
            </View>

            {
            skinAtual == index ? 
                <TouchableOpacity style={styles.selectOrPay} onPress={() => handlePurchaseClick(info[index].price, index)}>
                    <Text style={{ color: 'white' }}>Selecionado</Text>
                </TouchableOpacity> 
                :
                <TouchableOpacity style={styles.selectOrPay} onPress={() => handlePurchaseClick(info[index].price, index)}>
                <Text style={{ color: 'white' }}>{info[index].price == 0 ? 'Selecionar' : info[index].price}</Text>
            </TouchableOpacity>
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#cdd4ff'
    },
    icons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '80%'
    },
    skinName: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5672a4',
        width: '80%',
        borderRadius: 20,
    },
    itensArea: {
        flex: 5,
        flexDirection: 'row',
        width: '100%',
        margin: 30,
        borderColor: '#5672a4',
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    selectOrPay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5672a4',
        width: '80%',
        borderRadius: 20,
        marginBottom: 10
    },
    backAndNextButtons: {
        width: 50, 
        height: 50,
    }
});