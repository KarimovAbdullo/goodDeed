import { createStackNavigator } from '@react-navigation/stack'
import { useColors } from 'hooks/useColors'
import React from 'react'
import R from 'res'
import CreateApplicationScreen from 'screens/CreateApplication'
import HomeScreen from 'screens/Home'
import ServiceScreen from 'screens/ServiceScreen/ServiceScreen'
import { getApplicationScreenOptions } from 'utils/navigation'

const HomeStack = () => {
  const Stack = createStackNavigator()
  const colors = useColors()

  return (
    <Stack.Navigator screenOptions={getApplicationScreenOptions(colors)}>
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
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTitle: 'Радус поиска 500 метров',
          headerBackTitle: ' ',
          headerBackImage: () => <R.icons.BackIcon />,
          headerStyle: {
            height: 60,
            backgroundColor: colors.headerRed,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
        }}
      />

      <Stack.Screen
        component={CreateApplicationScreen}
        name={R.routes.SCREEN_CREATE_APPLICATION}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTitle: ' ',
          headerBackTitle: ' ',
          headerBackImage: () => <R.icons.BackIcon />,
          headerStyle: {
            height: 60,
            backgroundColor: colors.headerRed,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
