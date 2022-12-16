import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React, { ReactElement } from 'react'
import { StyleProp, Text, TextProps } from 'react-native'
import { TThemeColors } from 'res/theme'
import { createStyles } from 'utils/createStyles'

interface IProps {
  children: ReactElement | string | string[]
  center?: boolean
  type?: 'bold' | 'regular' | 'regular1' | 'regular2'
  style?: StyleProp<TextProps>
  numberOfLines?: number
  color?: keyof TThemeColors
}

const TextButton: React.FC<IProps> = ({
  type = 'regular',
  children,
  style,
  numberOfLines,
  color = 'black',
  center = false,
}) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()
  const colorStyle = { color: color ? colors[color] : undefined }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles[type], center ? styles.center : {}, colorStyle, style]}>
      {children}
    </Text>
  )
}

const stylesConfig = createStyles((_colors, fonts) => ({
  regular: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '12@ms',
    lineHeight: '15@ms',
    fontWeight: '600',
  },
  bold: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '16@ms',
    lineHeight: '22@ms',
    color: '#BDBDBD',
  },
  center: {
    textAlign: 'center',
  },
  regular1: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '12@ms',
    lineHeight: '18@ms',
    fontWeight: '700',
  },
  regular2: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '12@ms',
    lineHeight: '15@ms',
    fontWeight: '300',
  },
}))

export default TextButton
