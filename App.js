import { StyleSheet, View } from 'react-native';

import FooterView from './components/FooterView';
import SpriteView from './components/SpriteView';
import TopIconView from './components/TopIconView';

export default function App() {
  return (
    <View style={styles.container}>
      <TopIconView />
      <SpriteView />
      <FooterView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    marginTop: 60,
  }
});