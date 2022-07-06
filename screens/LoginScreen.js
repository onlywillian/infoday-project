import { View, StyleSheet, Image } from 'react-native';

import loginImage from '../assets/screen/login.png';

export default function InvenctoryScreen() {
    return (
        <View>
            <Image source={loginImage} style={styles.image}/>
        </View>
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
    }
});