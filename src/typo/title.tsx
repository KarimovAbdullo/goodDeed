import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React, { ReactElement } from 'react'
import { StyleProp, Text, TextProps } from 'react-native'
import { TThemeColors } from 'res/theme'
import { createStyles } from 'utils/createStyles'

interface IProps {
  children: ReactElement | string | string[]
  center?: boolean
  type?: 'bold' | 'regular'
  style?: StyleProp<TextProps>
  numberOfLines?: number
  color?: keyof TThemeColors
  flex?: boolean
}

const Title: React.FC<IProps> = ({
  type = 'regular',
  children,
  style,
  numberOfLines,
  color = 'black',
  center = false,
  flex = false,
}) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()
  //@ts-ignore
  const colorStyle = { color: color ? colors[color] : undefined }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles[type],
        flex && styles.flex,
        center ? styles.center : {},
        colorStyle,
        style,
      ]}>
      {children}
    </Text>
  )
}

const stylesConfig = createStyles((_colors, fonts) => ({
  regular: {
    fontFamily: fonts.Montserrat.SemiBold,
    fontSize: '18@ms',
    lineHeight: '22@ms',
    fontWeight: '600',
  },
  bold: {
    fontFamily: fonts.Montserrat.medium,
    fontSize: '16@ms',
    lineHeight: '22@ms',
  },
  center: {
    textAlign: 'center',
  },
  flex: {
    flex: 1,
  },
}))

export default Title
