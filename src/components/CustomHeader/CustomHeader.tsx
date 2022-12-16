import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import R from 'res'

interface IProps {
  text?: string | string[]
  style?: object
  bgColor: string
}

import stylesConfig from './CustomHeader.style'

export const CustomHeader = ({ text, bgColor }: IProps) => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)
  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View style={[styles.header, { backgroundColor: bgColor }]}>
      <TouchableOpacity style={styles.icon} onPress={goBack}>
        <R.icons.BackIcon />
      </TouchableOpacity>

      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
