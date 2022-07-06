import { View, StyleSheet, Text } from 'react-native';

import Button from '../components/ButtonView';
import backIcon from '../assets/icons/back.png';

export default function InvenctoryScreen({ navigation }) {
    const handleBackIconClick = () => {
        return navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1,flexDirection: 'row' }}>
                <View style={styles.icons}>
                    <Button image={backIcon} press={handleBackIconClick}/>
                    <Button iconName={'back'}/>
                    <Button iconName={'back'}/>
                </View>

                <View style={styles.spritePlayer}>
                    <Text>Player Sprite</Text>
                </View>

                <View style={styles.icons}>
                    <Button iconName={'back'}/>
                    <Button iconName={'back'}/>
                    <Button iconName={'back'}/>
                </View>
            </View>

            <View style={styles.itensArea}>
                <Text>Itens Space</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    icons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    spritePlayer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itensArea: {
        flex: 1,
        margin: 30,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});