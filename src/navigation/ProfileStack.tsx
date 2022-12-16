import { createStackNavigator } from '@react-navigation/stack'
import { useColors } from 'hooks/useColors'
import React from 'react'
import R from 'res'
import NotificationsScreen from 'screens/Notifications'
import ProfileScreen from 'screens/ProfileScreen'
import { getDefaultScreenOptions } from 'utils/navigation'

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
            backgroundColor: colors.white,
          },
          headerShown: true,
          headerTitle: 'Личный кабинет',
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        component={NotificationsScreen}
        name={R.routes.SCREEN_NOTIFICATIONS}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTitle: 'Уведомления',
          headerBackTitle: ' ',
          headerBackImage: () => <R.icons.BackIcon />,
          headerStyle: {
            height: 90,
            backgroundColor: colors.gray,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default ProfileStack
