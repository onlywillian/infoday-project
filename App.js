import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen'
import MainScreen from './screens/MainScreen';
import InventoryScreen from './screens/InventoryScreen';
import GameScreen from './screens/GameScreen';
import TransferScreen from './screens/TransferScreen';
import QuizScreen from './screens/QuizScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false, statusBarStyle: 'dark' }}/>
        <Stack.Screen name='Home' component={MainScreen} options={{ headerShown: false, statusBarStyle: 'dark' }}/>
        <Stack.Screen name='Inventory' component={InventoryScreen} options={{ headerShown: false, statusBarStyle: 'dark' }}/>
        <Stack.Screen name='Transfer' component={TransferScreen} options={{ headerShown: false, statusBarStyle: 'dark' }}/>
        <Stack.Screen name='Game' component={GameScreen} options={{ headerShown: false, statusBarStyle: 'dark' }}/>
        <Stack.Screen name='Quiz' component={QuizScreen} options={{ headerShown: false, statusBarStyle: 'dark' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}