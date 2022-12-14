import { DefaultTheme } from '@react-navigation/native'

const theme = {
  light: {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      // Default background color, prevents flickering
      background: '#FFFFFF',

      linearStart: '#FFC24D',
      linearEnd: '#FF9921',
      white: '#FFFFFF',
      fiolet: '#FFF1CE',
      black: '#13172B',
      gray: '#F5F6FA',
      orange: '#FFC24D',
      textPrimary: '#4F4F4F',
      buttonSecondary: '#E5E5E5',
      textSecondary: '#BDBDBD',
    },
  },
  dark: {
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      // Default background color, prevents flickering
      background: '#FFFFFF',

      linearStart: '#FFC24D',
      linearEnd: '#FF9921',
      white: '#FFFFFF',
      fiolet: '#FFF1CE',
      black: '#13172B',
      gray: '#F5F6FA',
      orange: '#FFC24D',
      textPrimary: '#4F4F4F',
      buttonSecondary: '#E5E5E5',
      textSecondary: '#BDBDBD',
    },
  },
}

export type TTheme = typeof theme.light & typeof theme.dark
export type TThemeColors = typeof theme.light.colors & typeof theme.dark.colors

export default theme
