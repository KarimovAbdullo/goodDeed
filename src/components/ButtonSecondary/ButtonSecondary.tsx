import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'

interface IProps {
  text: string | string[]
  onPress?: (() => void) | undefined
  style?: object
  loading?: boolean
}

import stylesConfig from './ButtonSecondary.styles'

export const ButtonSecondary = ({ text, onPress, style, loading }: IProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={[styles.button, style]}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  )
}
