import { StyleSheet, Text, View } from 'react-native';

import Button from './ButtonView';

import InvectoryIcon from '../assets/icons/BOTAO_INVENTARIO.png';
import GameIcon from '../assets/icons/ICONE_PAGINA_JOGOS.png';

export default function FooterView({ route, navigation }) {
    const { nameUser, money, skinAtual } = route.params;

    const handleShopIconClick = () => {
        return navigation.navigate('Inventory', {
            nameUser: nameUser,
            money: money,
            skinAtual: skinAtual
        });
    }

    const handleTranferIconClick = () => {
        return navigation.navigate('Transfer', {
            money: money,
            nameUser: nameUser
        });;
    }

    return (
        <View style={styles.footer}>
            <Button image={GameIcon} press={handleTranferIconClick}/>

            <View style={
                {
                    width: '50%', 
                    backgroundColor: '#5672a4', 
                    height: 50,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }
                }>
                <Text style={{color: 'white'}}>{nameUser}</Text>
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