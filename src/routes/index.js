import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from '../screens/app/Welcome'
import Login from '../screens/auth/Login'

const Routes = () => {

const Stack=createNativeStackNavigator()


  return (
<NavigationContainer>
    <Stack.Navigator>
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
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default Routes