import { View, StyleSheet } from 'react-native';

import FooterView from '../components/FooterView';
import SpriteView from '../components/SpriteView';
import TopIconView from '../components/TopIconView';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SpriteView />
      <FooterView navigation={ navigation }/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      height: '100%',
    }
});