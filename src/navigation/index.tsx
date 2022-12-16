import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useColors } from 'hooks/useColors'
import Tabs from 'navigation/Tabs'
import React, { useRef } from 'react'
import R from 'res'
import { TTheme } from 'res/theme'
import AddCardScreen from 'screens/AddCard'
import EditProfileScreen from 'screens/EditProfile'
import LoginScreen from 'screens/LoginScreen'
import LostItemsScreen from 'screens/LostItems'
import { TNavigationParams } from 'types/navigation'

const Navigator = ({ theme }: { theme: TTheme }) => {
  const RootStack = createStackNavigator()
  const navigationRef = useNavigationContainerRef<TNavigationParams>()
  const routeNameRef = useRef()
  const colors = useColors()

  return (
    <NavigationContainer
      theme={theme}
      ref={navigationRef}
      onReady={() => {
        // @ts-ignore
        routeNameRef.current = navigationRef.getCurrentRoute()?.name
      }}>
      <BottomSheetModalProvider>
        <RootStack.Navigator
          screenOptions={{ headerBackImage: () => <R.icons.BackIcon /> }}>
          <RootStack.Screen
            component={LoginScreen}
            name={R.routes.SCREEN_LOGIN}
            options={{
              cardStyle: {
                backgroundColor: 'white',
              },
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            name={R.routes.ROOT_MAIN}
            //@ts-ignore
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />

          <RootStack.Screen
            component={EditProfileScreen}
            name={R.routes.SCREEN_EDIT_PROFILE}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: true,
              headerTitle: 'Профиль',
              headerBackImage: () => <R.icons.BackIcon />,
              headerStyle: {
                height: 90,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
          />

          <RootStack.Screen
            component={AddCardScreen}
            name={R.routes.SCREEN_ADD_CARD}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: 'Добавление карты',
              headerBackTitle: ' ',
              headerStyle: {
                height: 90,
                backgroundColor: colors.fiolet,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
          />

          <RootStack.Screen
            component={LostItemsScreen}
            name={R.routes.SCREEN_LOST_ITEMS}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: 'Найденые/потеряные вещи',
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
        </RootStack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  )
}

export default Navigator
