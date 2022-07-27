import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text, Image } from 'react-native';

import skin from '../assets/player_skins/base_masculino.png';

export default function InvenctoryScreen() {
    const [ value, setValue ] = useState('');

    const handleButtonClick = () => {
        fetch('http://10.0.0.7:3001/usuarios', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: value,
            })
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.avatar}>
                    <Image source={skin} />
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