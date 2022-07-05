import { StyleSheet, Text, View } from 'react-native';

import Button from './ButtonView';

export default function FooterView({ navigation }) {
    return (
        <View style={styles.footer}>
            <Button iconName='sports-esports' />

            <View style={
                {
                    // flex: 2,
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

            <Button iconName='shopping-cart'/>
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