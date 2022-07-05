import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import InvenctoryScreen from './screens/InvenctoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={MainScreen} options={{ headerShown: false, statusBarStyle: 'dark' }}/>
        <Stack.Screen name='Invenctory' component={InvenctoryScreen} options={{ headerShown: false, statusBarStyle: 'dark' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}