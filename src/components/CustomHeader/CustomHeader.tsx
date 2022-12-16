import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, View } from 'react-native'
import R from 'res'

interface IProps {
  text?: string | string[]
  style?: object
  bgColor: string
}

import stylesConfig from './CustomHeader.style'

export const CustomHeader = ({ text, bgColor }: IProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <View style={[styles.header, { backgroundColor: bgColor }]}>
      <View style={styles.icon}>
        <R.icons.BackIcon />
      </View>

      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
