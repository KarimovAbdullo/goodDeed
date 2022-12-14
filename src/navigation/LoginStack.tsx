import { createStackNavigator } from '@react-navigation/stack'
import { useColors } from 'hooks/useColors'
import React from 'react'
import R from 'res'
import LoginScreen from 'screens/LoginScreen'
import { getDefaultScreenOptions } from 'utils/navigation'

const LoginStack = () => {
  const Stack = createStackNavigator()
  const colors = useColors()

  return (
    <Stack.Navigator screenOptions={getDefaultScreenOptions(colors)}>
      <Stack.Screen
        component={LoginScreen}
        name={R.routes.SCREEN_LOGIN}
        options={{
          cardStyle: {
            backgroundColor: colors.white,
          },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default LoginStack
