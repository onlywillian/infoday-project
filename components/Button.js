import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function FooterView({ iconName }) {
    return (
        <View style={styles.background}>
            <Icon name={iconName} size={30} color="white" />
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});