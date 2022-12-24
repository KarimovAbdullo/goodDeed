import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import I18n from 'i18n-js'
import Tabs from 'navigation/Tabs'
import React, { useRef } from 'react'
import R from 'res'
import { TTheme } from 'res/theme'
import AddCardScreen from 'screens/AddCard'
import ApplicationScreen from 'screens/ApplicationScreen/ApplicationScreen'
import ChatScreen from 'screens/ChatScreen/ChatScreen'
import EditProfileScreen from 'screens/EditProfile'
import FindApplicationScreen from 'screens/FindApplication'
import FindRoomScreen from 'screens/FindRoomScreen/FindRoomScreen'
import LoginScreen from 'screens/LoginScreen'
import LostItemsScreen from 'screens/LostItems'
import MyGoodDeedScreen from 'screens/MyGoodDeedScreen/MyGoodDeedScreen'
import RequestGoodDeed from 'screens/MyGoodDeedScreen/RequestGoodDeed/RequestGoodDeed'
import { BankCardScreen } from 'screens/MyGoodDeedScreen/RequestGoodDeed/RevardScreen/BankCardScreen/BankCardScreen'
import RevardScreen from 'screens/MyGoodDeedScreen/RequestGoodDeed/RevardScreen/RevardScreen'
import MyServiceScreen from 'screens/MyServiceScreen/MyServiceScreen'
import RequstService from 'screens/MyServiceScreen/RequestService/RequestService'
import ExecuterScreen from 'screens/MyServiceScreen/RequestService/ResponsesScreen/ExecuterScreen/ExecuterScreen'
import ReadReview from 'screens/MyServiceScreen/RequestService/ResponsesScreen/ExecuterScreen/ReadReview/ReadReview'
import ResponsesScreen from 'screens/MyServiceScreen/RequestService/ResponsesScreen/ResponsesScreen'
import NewApplicationScreen from 'screens/NewApplication'
import NotificationsScreen from 'screens/Notifications'
import OrderScreen from 'screens/Order'
import ReplenishmentScreen from 'screens/Replenishment'
import ReviewScreen from 'screens/ReviewScreen/ReviewScreen'
import { TNavigationParams } from 'types/navigation'
import { lang } from 'utils/lang'
const T = R.lang.index

const Navigator = ({ theme }: { theme: TTheme }) => {
  const RootStack = createStackNavigator()
  const navigationRef = useNavigationContainerRef<TNavigationParams>()
  const routeNameRef = useRef()
  const colors = useColors()
  I18n.locale = 'en'
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
          <RootStack.Screen
            component={ApplicationScreen}
            name={R.routes.SCREEN_APPLICATION}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: () => (
                <Typo.Body type="regular16">
                  {' '}
                  {lang(`${T}.application`)}
                </Typo.Body>
              ),
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

          <RootStack.Screen
            component={ChatScreen}
            name={R.routes.SCREEN_CHAT}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: lang(`${T}.chat`),
              headerBackTitle: ' ',
              headerBackImage: () => <R.icons.BackIcon />,
              headerRight: () => <R.icons.CallIcon />,
              headerStyle: {
                height: 60,
                backgroundColor: colors.headerRed,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
          />
          <RootStack.Screen
            component={NotificationsScreen}
            name={R.routes.SCREEN_NOTIFICATIONS}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: lang(`${T}.notification`),
              headerBackTitle: ' ',
              headerBackImage: () => <R.icons.BackIcon />,
              headerRight: () => <R.icons.CallIcon />,
              headerStyle: {
                height: 60,
                backgroundColor: colors.headerRed,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
          />
          <RootStack.Screen
            component={ReviewScreen}
            name={R.routes.SCREEN_REVIEW}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: lang(`${T}.review`),
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

          <RootStack.Screen
            component={NewApplicationScreen}
            name={R.routes.SCREEN_NEW_APPLICATION}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: 'Новая заявка',
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

          <RootStack.Screen
            component={ReplenishmentScreen}
            name={R.routes.SCREEN_REPLENISHMENT}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: 'Пополнение',
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

          <RootStack.Screen
            component={OrderScreen}
            name={R.routes.SCREEN_ORDER}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: 'Заказ №2342',
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
          <RootStack.Screen
            component={FindRoomScreen}
            name={R.routes.SCREEN_FINDROOM}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: lang(`${T}.findRoom`),
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
          <RootStack.Screen
            component={MyServiceScreen}
            name={R.routes.SCREEN_MYSERVICE}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: 'Ваши запросы на услугу',
              headerBackTitle: ' ',
              headerBackImage: () => <R.icons.BackIcon />,

              headerStyle: {
                height: 60,
                backgroundColor: colors.gray,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
          />
          <RootStack.Screen
            component={RequstService}
            name={R.routes.SCREEN_REQUESTSERVICE}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: 'Заявка №4564',
              headerBackTitle: ' ',
              headerBackImage: () => <R.icons.BackIcon />,

              headerStyle: {
                height: 60,
                backgroundColor: colors.gray,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
          />
          <RootStack.Screen
            component={ResponsesScreen}
            name={R.routes.SCREEN_RESPONSES}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: 'Отклики',
              headerBackTitle: ' ',
              headerBackImage: () => <R.icons.BackIcon />,

              headerStyle: {
                height: 60,
                backgroundColor: colors.gray,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
          />
          <RootStack.Screen
            component={ExecuterScreen}
            name={R.routes.SCREEN_EXECUTER}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: 'Данные исполнителя',
              headerBackTitle: ' ',
              headerBackImage: () => <R.icons.BackIcon />,

              headerStyle: {
                height: 60,
                backgroundColor: colors.gray,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
          />
          <RootStack.Screen
            component={ReadReview}
            name={R.routes.SCREEN_READREVIEW}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: 'Отзывы',
              headerBackTitle: ' ',
              headerBackImage: () => <R.icons.BackIcon />,

              headerStyle: {
                height: 60,
                backgroundColor: colors.gray,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
          />

          <RootStack.Screen
            component={MyGoodDeedScreen}
            name={R.routes.SCREEN_MYGOODDEED}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: () => (
                <Typo.Title type="header">Ваши добрые дела</Typo.Title>
              ),
              headerBackTitle: ' ',
              headerBackImage: () => <R.icons.BackIcon />,

              headerStyle: {
                height: 60,
                backgroundColor: colors.gray,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
          />
          <RootStack.Screen
            component={RequestGoodDeed}
            name={R.routes.SCREEN_REQUESTGOODDEED}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: 'Заявка №4564',
              headerBackTitle: ' ',
              headerBackImage: () => <R.icons.BackIcon />,

              headerStyle: {
                height: 60,
                backgroundColor: colors.gray,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
          />
          <RootStack.Screen
            component={RevardScreen}
            name={R.routes.SCREEN_REVARD}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: 'Вознаграждение',
              headerBackTitle: ' ',
              headerBackImage: () => <R.icons.BackIcon />,

              headerStyle: {
                height: 60,
                backgroundColor: colors.gray,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
          />
          <RootStack.Screen
            component={BankCardScreen}
            name={R.routes.SCREEN_BANKCARD}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: 'Банковской картой',
              headerBackTitle: ' ',
              headerBackImage: () => <R.icons.BackIcon />,

              headerStyle: {
                height: 60,
                backgroundColor: colors.gray,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
          />

          <RootStack.Screen
            component={FindApplicationScreen}
            name={R.routes.SCREEN_FIND_APPLICATION}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTitle: lang(`${T}.application`),
              headerBackTitle: ' ',
              headerBackImage: () => <R.icons.BackIcon />,

              headerStyle: {
                height: 60,
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
