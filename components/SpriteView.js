import { View, Text } from 'react-native';

export default function SpriteView() {
    return (
        <View style={
            {
                flex: 5,
                alignItems: 'center',
                justifyContent: 'center',
            }
            }>
            <Text>Sprite Personagem</Text>
        </View>
    )
}