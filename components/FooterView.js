import { StyleSheet, Text, View } from 'react-native';

import Button from './ButtonView';

export default function FooterView({ navigation }) {
    const handleShopIconClick = () => {
        return navigation.navigate('Shop');
    }

    const handleGameIconClick = () => {
        return navigation.navigate('Game');
    }

    return (
        <View style={styles.footer}>
            <Button iconName='sports-esports' press={handleGameIconClick}/>

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

            <Button iconName='shopping-cart' press={handleShopIconClick}/>
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