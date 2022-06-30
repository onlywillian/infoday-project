import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function FooterView() {
    return (
        <View style={styles.footer}>
            <View style={styles.back}>
                <Icon name="sports-esports" size={30} color="white"/>
            </View>
            <View style={styles.back}>
                <Text style={{color: 'white'}}>ASDsad</Text>
            </View>
            <View style={styles.back}>
                <Icon name="shopping-basket" size={30} color="white"/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    back: {
        backgroundColor: 'black',
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});