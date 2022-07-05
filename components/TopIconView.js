import { View } from 'react-native';

import Button from './ButtonView';

export default function TopIconView({ navigation }) {
    const handlePressTopIcon = () => {
        return navigation.navigate('Invenctory')
    }

    return (
        <View style={{ marginLeft: 20, marginTop: 20, }}>
            <Button iconName='backpack' press={handlePressTopIcon}/>
        </View>
    )
}