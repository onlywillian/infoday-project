import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text, Alert} from 'react-native';

export default function InvenctoryScreen({ navigation }) {
    const [value, setValue] = useState('');

    const handleButtonClick = () => {
        if (value == '') return Alert.alert('Campo de nome em branco', 'Por favor insira um nome válido');

        async function postData() {
            let data = await fetch("https://infoday-project.herokuapp.com/usuarios", {
                method:'POST',
                headers: new Headers({'content-type': 'application/json'}),
                body:JSON.stringify({
                    name: value
                }),
            })

            return getData();
        }
        
        async function getData() {
            let res = await fetch(`https://infoday-project.herokuapp.com/usuarios/${value}`);
            let data = await res.json();

            console.log(data);

            if (data.message == 'Documento nao existe') return postData();

            navigation.navigate('Home', {
                nameUser: data.nome,
                money: data.money,
                skinAtual: data.SkinAtual,
            });
        }
        getData();
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.avatar}>
                    <Text style={{color: 'white'}}>Avatar</Text>
                </View>
                <SafeAreaView>
                    <TextInput 
                        value={value} 
                        onChangeText={setValue} 
                        maxLength={20} 
                        style={styles.input} 
                        placeholder="insira seu nome"
                    />
                    <Button title='Escolher' onPress={handleButtonClick} />
                </SafeAreaView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    avatar: {
        // flex: 1,
        backgroundColor: 'blue',
        borderRadius: 100,
        height: 120,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        
    },
    inputContainer: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        padding: 50,
        borderColor: 'blue',
    },
    input: {
        height: 40,
        width: 220,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});