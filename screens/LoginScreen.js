import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

import loginImage from '../assets/screen/login.png';

export default function InvenctoryScreen() {
    const [ value, setValue ] = useState('');
    const [ newValue, setNewValue ] = useState('');

    const handleKeyPress = () => {
        return setNewValue();
    }

    return (
        <SafeAreaView>
            <TextInput value={value} onChangeText={setValue} maxLength={20} onKeyPress={() => handleKeyPress()} style={styles.input}/>
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