import { View, StyleSheet } from 'react-native';

import Button from '../components/ButtonView';

export default function InvenctoryScreen() {
    return (
        <View style={styles.container}>
            <View style={{flex: 1,flexDirection: 'row'}}>
                <View style={styles.icons}>
                    <Button iconName={'back'}/>
                    <Button iconName={'back'}/>
                    <Button iconName={'back'}/>
                </View>

                <View style={styles.spritePlayer}>

                </View>

                <View style={styles.icons}>
                    <Button iconName={'back'}/>
                    <Button iconName={'back'}/>
                    <Button iconName={'back'}/>
                </View>
            </View>

            <View style={styles.itensArea}>

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
        backgroundColor: 'gray'
    },
    itensArea: {
        flex: 1,
        backgroundColor: 'gray',
        margin: 30
    }
});