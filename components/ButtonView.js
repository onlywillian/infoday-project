import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function FooterView({ iconName, press }) {
    return (
        <TouchableOpacity onPress={() => press()}>
            <View style={styles.background}>
                <Icon name={iconName} size={30} color="white" />
            </View>
        </TouchableOpacity>
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