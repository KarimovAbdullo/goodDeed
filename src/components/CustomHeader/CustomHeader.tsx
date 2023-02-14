import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import R from 'res'

interface IProps {
  text?: string | string[]
  style?: object
  bgColor: string
}

import stylesConfig from './CustomHeader.style'

export const CustomHeader = ({ text, bgColor }: IProps) => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={[styles.header, { backgroundColor: bgColor }]}>
      <TouchableOpacity onPress={goBack} style={styles.icon}>
        <R.icons.BackIcon />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </SafeAreaView>
  )
}
