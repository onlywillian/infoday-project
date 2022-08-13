import { StyleSheet, Text, View } from 'react-native';

import Button from './ButtonView';

import InvectoryIcon from '../assets/icons/BOTAO_INVENTARIO.png';
import GameIcon from '../assets/icons/ICONE_PAGINA_JOGOS.png';

export default function FooterView({ navigation }) {
    const handleShopIconClick = () => {
        return navigation.navigate('Inventory');
    }

    const handleTranferIconClick = () => {
        return navigation.navigate('Transfer');
    }

    return (
        <View style={styles.footer}>
            <Button image={GameIcon} press={handleTranferIconClick}/>

            <View style={
                {
                    width: '50%', 
                    backgroundColor: 'black', 
                    height: 50,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }
                }>
                <Text style={{color: 'white'}}>Nome</Text>
            </View>

            <Button image={InvectoryIcon} press={handleShopIconClick}/>
        </View>
    )
};

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        marginBottom: 20,
    }
});