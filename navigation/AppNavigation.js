import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import SigninScreen from '../screens/SigninScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import BreadDetail from '../screens/BreadDetail';


const Stack = createStackNavigator();

function AppStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SigninScreen" screenOptions={{headerShown:false}}>
      <Stack.Screen name='SigninScreen' component={SigninScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='BreadDetail' component={BreadDetail}/>
    </Stack.Navigator>
  );
}

const AppNavigation = () => {
    return(
       <NavigationContainer>
            <AppStackNavigator/>
       </NavigationContainer>
    );
};

export default AppNavigation;