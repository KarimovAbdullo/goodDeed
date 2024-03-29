import { createStackNavigator } from '@react-navigation/stack'
import { useColors } from 'hooks/useColors'
import React from 'react'
import R from 'res'
import ProfileScreen from 'screens/ProfileScreen'
import { lang } from 'utils/lang'
import { getDefaultScreenOptions } from 'utils/navigation'

const T = R.lang.index

const ProfileStack = () => {
  const Stack = createStackNavigator()
  const colors = useColors()

  return (
    <Stack.Navigator screenOptions={getDefaultScreenOptions(colors)}>
      <Stack.Screen
        component={ProfileScreen}
        name={R.routes.SCREEN_PROFILE}
        options={{
          cardStyle: {
            backgroundColor: colors.background,
          },
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: lang(`${T}.кабинет`),
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default ProfileStack
