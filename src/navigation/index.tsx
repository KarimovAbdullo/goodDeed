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
import HomeScreen from 'screens/Home'
import LoginScreen from 'screens/LoginScreen'
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
          screenOptions={{ headerShown: false, headerTitle: 'Home' }}>
          <RootStack.Screen
            name={R.routes.ROOT_MAIN}
            //@ts-ignore
            component={Tabs}
          />

          <RootStack.Screen
            component={HomeScreen}
            name={R.routes.SCREEN_HOME}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            component={LoginScreen}
            name={R.routes.SCREEN_LOGIN}
            options={{
              cardStyle: {
                backgroundColor: colors.white,
              },
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />
        </RootStack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  )
}

export default Navigator
