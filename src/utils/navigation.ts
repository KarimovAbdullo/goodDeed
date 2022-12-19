import { StackNavigationOptions } from '@react-navigation/stack'
import { s } from 'react-native-size-matters'
import R from 'res'
import { TThemeColors } from 'res/theme'

export const getDefaultScreenOptions = (
  colors: TThemeColors,
): StackNavigationOptions => ({
  headerTitleStyle: {
    color: colors.textPrimary,
    fontFamily: R.fonts.Ubuntu.medium,
    fontSize: s(14),
    // width: '100%',

    // textAlign: 'center',
    // justifyContent: 'center',
  },
  headerStyle: {
    backgroundColor: colors.gray,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 60,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerLeftContainerStyle: {
    paddingLeft: s(10),
  },
  headerTintColor: colors.gray,
  headerRightContainerStyle: {
    paddingRight: s(10),
  },
  headerBackTitle: ' ',
})
export const getApplicationScreenOptions = (
  colors: TThemeColors,
): StackNavigationOptions => ({
  headerTitleStyle: {
    color: colors.textPrimary,
    fontFamily: R.fonts.Ubuntu.medium,
    fontSize: s(14),
    // width: '100%',

    // textAlign: 'center',
    // justifyContent: 'center',
  },
  headerStyle: {
    backgroundColor: colors.headerRed,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 60,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerLeftContainerStyle: {
    paddingLeft: s(10),
  },
  headerTintColor: colors.gray,
  headerRightContainerStyle: {
    paddingRight: s(10),
  },
  headerBackTitle: ' ',
})

export const getFindRoomScreenOptions = (
  colors: TThemeColors,
): StackNavigationOptions => ({
  headerTitleStyle: {
    color: colors.textPrimary,
    fontFamily: R.fonts.Ubuntu.medium,
    fontSize: s(14),
    // width: '100%',

    // textAlign: 'center',
    // justifyContent: 'center',
  },
  headerStyle: {
    backgroundColor: colors.greenHeader,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 60,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerLeftContainerStyle: {
    paddingLeft: s(10),
  },
  headerTintColor: colors.gray,
  headerRightContainerStyle: {
    paddingRight: s(10),
  },
  headerBackTitle: ' ',
})

export const getFastTransitionParams = (): StackNavigationOptions => ({
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 200,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 100,
      },
    },
  },
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.5, 0.9, 1],
      }),
    },
  }),
})

export const getTabRouteById = (tabId: string) => {
  switch (tabId) {
    case 'home':
      return R.routes.STACK_HOME
    default:
      return R.routes.STACK_HOME
  }
}
