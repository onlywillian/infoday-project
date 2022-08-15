import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function FooterView({ iconName, press, image }) {
    return (
        <TouchableOpacity onPress={() => press()}>
            <View style={styles.background}>
                {
                    image ? <Image source={image} style={styles.image} /> : <Icon name={iconName} size={30} color="white" />
                }
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#5672a4',
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    }
});