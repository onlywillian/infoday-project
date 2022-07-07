import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';

import loginImage from '../assets/screen/login.png';

export default function InvenctoryScreen() {
    const [ value, setValue ] = useState('');

    const handleButtonClick = () => {
        fetch('http://10.0.0.6:3001/usuarios', {
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});