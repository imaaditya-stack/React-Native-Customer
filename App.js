/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Welcome from './src/screens/welcome';
import Login from './src/screens/login';
import Register from './src/screens/registeration';
import phoneNumber from './src/screens/registeration/phone.number';
import Anniversary from './src/screens/registeration/anniversary.date';
import Birth from './src/screens/registeration/birth.date';
import Hobbies from './src/screens/registeration/hobbies';
import Profession from './src/screens/registeration/profession';
import Home from './src/screens/home';
import SelectCategory from './src/screens/create-lounge/select.category';
import LoungeForm from './src/screens/create-lounge/lounge.form';
import Retailers from './src/screens/retailers';
import { Provider } from 'react-redux';

// Redux imports
import { store } from './src/redux/store';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#93bdfd',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontFamily: 'Jost-Medium',
              },
            }}>
            <Stack.Screen
              name="welcome"
              component={Welcome}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="register"
              component={Register}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="phonenumber"
              component={phoneNumber}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="birth"
              component={Birth}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="anniversary"
              component={Anniversary}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="hobby"
              component={Hobbies}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="profession"
              component={Profession}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="selectcategory"
              component={SelectCategory}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="loungeform"
              component={LoungeForm}
              options={{ title: 'New Lounge' }}
            />
            <Stack.Screen
              name="retailers"
              component={Retailers}
              options={({ route }) => ({ title: route.params.name })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
