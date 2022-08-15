import { View, Image, StyleSheet } from 'react-native';

import skin from '../assets/player_skins/base_masculino.png';

export default function SpriteView() {
    return (
        <View style={
            {
                flex: 5,
                alignItems: 'center',
                justifyContent: 'center',
            }
            }>
            <Image style={styles.image} source={skin} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: '80%',
        width: '70%',
    }
});