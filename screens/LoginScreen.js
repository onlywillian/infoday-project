import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';
import axios from 'axios';

import loginImage from '../assets/screen/login.png';

export default function InvenctoryScreen() {
    const [ value, setValue ] = useState('');

    const handleButtonClick = () => {
        fetch('https://mywebsite.com/endpoint/', {
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
        <SafeAreaView>
            <TextInput value={value} onChangeText={setValue} maxLength={20} style={styles.input}/>
            <Button title='Go'onPress={handleButtonClick} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    image: {
        height: '100%',
        width: '100%',
        transform: [{ scale: 1.4 }],
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});