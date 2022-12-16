import { createStackNavigator } from '@react-navigation/stack'
import { useColors } from 'hooks/useColors'
import React from 'react'
import R from 'res'
import HomeScreen from 'screens/Home'
import ServiceScreen from 'screens/ServiceScreen/ServiceScreen'
import { getDefaultScreenOptions } from 'utils/navigation'

const HomeStack = () => {
  const Stack = createStackNavigator()
  const colors = useColors()

  return (
    <Stack.Navigator screenOptions={getDefaultScreenOptions(colors)}>
      <Stack.Screen
        component={HomeScreen}
        name={R.routes.SCREEN_HOME}
        options={{
          cardStyle: {
            backgroundColor: colors.background,
          },
          headerShown: false,
          headerTitleAlign: 'center',
          title: 'Mobile Market',
        }}
      />
      <Stack.Screen
        component={ServiceScreen}
        name={R.routes.SCREEN_SERVICE}
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

export default HomeStack
