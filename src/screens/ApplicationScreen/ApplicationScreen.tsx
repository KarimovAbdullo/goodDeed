import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, View } from 'react-native'

import styleConfig from './ApplicationScreen.style'
const ApplicationScreen = () => {
  const styles = useStyles(styleConfig)
  return (
    <View style={styles.section}>
      <Text>dsadas</Text>
    </View>
  )
}
export default ApplicationScreen
