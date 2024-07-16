import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from '../screens/app/Welcome'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import Dashboard from '../screens/app/Dashboard'
import BottomTabs from './bottomTabs'
import Store from '../screens/app/Store'
import Withdraw from '../screens/app/Withdraw'
import Upgrade from '../screens/app/Upgrade'

const Routes = ({initialRouteName}) => {

const Stack=createNativeStackNavigator()


  return (
<NavigationContainer>
    <Stack.Navigator >
{/* <Stack.Screen
          name="Tabs"
          component={initialRouteName === 'Dashboard' ?  : null}
          options={{
            headerShown: false,
          }}
        /> */}

        <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='Login'
        component={Login}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='Register'
        component={Register}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='BottomTabs'
        component={BottomTabs}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='Store'
        component={Store}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='Withdraw'
        component={Withdraw}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='Upgrade'
        component={Upgrade}
        options={{headerShown:false}}
        />
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default Routes