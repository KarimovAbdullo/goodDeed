import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface IProps {
  text: string | string[]
  onPress?: (() => void) | undefined
  style?: object
  loading?: boolean
  bgColor?: object
}

import stylesConfig from './CustomButton.styles'

export const CustomButton = ({ text, onPress, style, loading }: IProps) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()

  return (
    <TouchableOpacity onPress={onPress} disabled={loading}>
      <LinearGradient
        colors={[colors.linearStart, colors.linearEnd]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 2 }}
        style={[styles.button, style]}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.text}>{text}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  )
}
