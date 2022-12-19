import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, View } from 'react-native'

import styleConfig from './ListSection.style'

export const ListSection = () => {
  const styles = useStyles(styleConfig)
  return (
    <View style={styles.main}>
      <Text>dadad</Text>
    </View>
  )
}
