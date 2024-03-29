import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { s, vs } from 'react-native-size-matters'
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
            left: 0,
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
          tabBarItemStyle: {
            alignItems: 'flex-start',
            paddingLeft: s(50),
            paddingTop: s(10),
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <R.icons.HomeIcon size={s(21)} />
            ) : (
              <R.icons.HomeIcon color={R.colors.fiolet} size={s(21)} />
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
          tabBarItemStyle: {
            alignItems: 'flex-end',
            paddingRight: s(50),
            paddingTop: s(10),
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <R.icons.ProfileIcon size={s(21)} />
            ) : (
              <R.icons.ProfileIcon color={R.colors.fiolet} size={s(21)} />
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
    borderTopStartRadius: '1@s',
    borderTopEndRadius: '1@s',
    borderWidth: '1@s',

    borderColor: colors.textSecondary,

    height: Platform.select({
      ios: '86@s',
      android: '64@s',
    }),

    shadowColor: 'rgb(48, 48, 48)',
    shadowOpacity: 1,
    shadowRadius: '1@s',
    shadowOffset: {
      height: '1@vs',
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
    height: '90@vs',
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
  },
}))

export default Tabs
