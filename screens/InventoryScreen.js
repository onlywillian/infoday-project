import { View, StyleSheet, Text, Image } from 'react-native';

import Button from '../components/ButtonView';
import backIcon from '../assets/icons/back.png';
import coinIcon from '../assets/icons/MOEDA.png';

export default function InvenctoryScreen({ navigation }) {
    const handleBackIconClick = () => {
        return navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.icons}>
                <Button image={backIcon} press={handleBackIconClick}/>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={coinIcon} style={{ height: 50, width: 50 }}/>
                    <Text style={{ fontSize: 20, marginLeft: 10 }}>x00</Text>
                </View>
            </View>

            <View style={styles.skinName}>
                <Text style={{ color: 'white' }}>Player Sprite</Text>
            </View>

            <View style={styles.itensArea}>
                <Button />
                <View>
                    <Text>Itens Space</Text>
                </View>
                <Button />
            </View>

            <View style={styles.selectOrPay}>
                <Text style={{ color: 'white' }}>Player Sprite</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center'
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
        backgroundColor: 'black',
        width: '80%',
        borderRadius: 20,
    },
    itensArea: {
        flex: 5,
        flexDirection: 'row',
        width: '100%',
        margin: 30,
        borderColor: 'black',
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    selectOrPay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '80%',
        borderRadius: 20,
        marginBottom: 10
    }
});