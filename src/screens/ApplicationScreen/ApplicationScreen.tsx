import Container from 'components/Container'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, View } from 'react-native'

import styleConfig from './ApplicationScreen.style'
const ApplicationScreen = () => {
  const styles = useStyles(styleConfig)
  return (
    <Container>
      <View style={styles.section}>
        <Text>dsadas</Text>
      </View>
    </Container>
  )
}
export default ApplicationScreen
