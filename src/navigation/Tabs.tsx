import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { vs } from 'react-native-size-matters'
import R from 'res'
import { createStyles } from 'utils/createStyles'
import { getTabRouteById } from 'utils/navigation'

import HomeStack from './HomeStack'
import ProfileStack from './ProfileStack'

interface IProps {
  route: {
    params: {
      tab: string
    }
  }
}

const Tabs: React.FC<IProps> = ({ route }) => {
  const navigation = useSmartNavigation()

  const styles = useStyles(stylesConfig)
  const colors = useColors()

  useEffect(() => {
    if (!route?.params?.tab) {
      return
    }
    // @ts-ignore
    navigation.navigate(getTabRouteById(route?.params?.tab), {})
  }, [route?.params?.tab])

  const TabsNavigator = createBottomTabNavigator()

  return (
    <TabsNavigator.Navigator
      screenOptions={() => {
        return {
          headerShown: true,
          tabBarHideOnKeyboard: true,
          tabBarStyle: [styles.barStyle, { backgroundColor: colors.white }],
          tabBarItemStyle: {
            paddingVertical: vs(12),
            top: vs(9),
          },
          // tabBarLabelStyle: {
          //   marginTop: vs(10),
          //   fontSize: s(9),
          //   fontWeight: 'bold',
          //   paddingBottom: s(5),
          //   fontFamily: R.fonts.Ubuntu.medium,
          //   color: navigationProps.isFocused()
          //     ? colors.textPrimary
          //     : colors.textSecondary,
          // },
        }
      }}>
      <TabsNavigator.Screen
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <R.icons.HomeIcon />
            ) : (
              <R.icons.HomeIcon color={R.colors.fiolet} />
            ),
        }}
        name={R.routes.STACK_HOME}
        component={HomeStack}
      />

      <TabsNavigator.Screen
        options={{
          tabBarLabel: '',
          headerTitle: 'Личный кабинет',
          headerShown: false,
          headerTitleStyle: styles.headerTitle,
          headerStyle: styles.headerStyle,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <R.icons.ProfileIcon />
            ) : (
              <R.icons.ProfileIcon color={R.colors.fiolet} />
            ),
        }}
        name={R.routes.STACK_PROFILE}
        component={ProfileStack}
      />
    </TabsNavigator.Navigator>
  )
}

const stylesConfig = createStyles(colors => ({
  area: {
    flex: 1,
  },
  barStyle: {
    justifyContent: 'space-between',
    borderTopStartRadius: '5@s',
    borderTopEndRadius: '5@s',
    height: Platform.select({
      ios: '86@s',
      android: '64@s',
    }),

    shadowColor: 'rgb(48, 48, 48)',
    shadowOpacity: 6,
    shadowRadius: '20@s',
    shadowOffset: {
      height: '10@vs',
    },
    margin: 0,
    padding: 0,
    borderTopWidth: 0,
  },
  iconActive: {
    width: '50@vs',
    height: '50@vs',
    borderRadius: '8@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.fiolet,
  },
  headerStyle: {
    borderBottomWidth: '1@s',
    height: '70@vs',
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: '10@s',
    borderBottomRightRadius: '10@s',
  },
  headerTitle: {
    fontSize: '16@s',
    fontWeight: '500',
    color: colors.black,
    // textAlign: 'center',
    marginLeft: '39%',
    // alignItems: 'center',
  },
}))

export default Tabs
