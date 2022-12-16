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
import HomeScreen from 'screens/Home'
import LoginScreen from 'screens/LoginScreen'
import ProfileScreen from 'screens/ProfileScreen'
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
            component={ProfileScreen}
            name={R.routes.SCREEN_PROFILE}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: true,
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
              headerBackTitle: ' ',
              headerStyle: {
                height: 70,
                backgroundColor: colors.gray,
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
              headerBackTitleVisible: true,
              headerTitle: 'Добавление карты',
              headerBackTitle: ' ',
              headerStyle: {
                height: 70,
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

// const stylesConfig = createStyles(colors => ({
//   area: {
//     flex: 1,
//   },
//   barStyle: {
//     justifyContent: 'space-between',
//     borderTopStartRadius: '5@s',
//     borderTopEndRadius: '5@s',
//     height: Platform.select({
//       ios: '86@s',
//       android: '64@s',
//     }),

//     shadowColor: 'rgb(48, 48, 48)',
//     shadowOpacity: 6,
//     shadowRadius: '20@s',
//     shadowOffset: {
//       height: '10@vs',
//     },
//     margin: 0,
//     padding: 0,
//     borderTopWidth: 0,
//   },
//   iconActive: {
//     width: '50@vs',
//     height: '50@vs',
//     borderRadius: '8@s',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: colors.fiolet,
//   },
//   headerStyle: {
//     borderBottomWidth: '1@s',
//     height: '70@vs',
//     backgroundColor: colors.gray,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderBottomLeftRadius: '10@s',
//     borderBottomRightRadius: '10@s',
//   },
//   headerTitle: {
//     fontSize: '16@s',
//     fontWeight: '500',
//     color: colors.black,
//     // textAlign: 'center',
//     marginLeft: '39%',
//     // alignItems: 'center',
//   },
// }))

export default Navigator
