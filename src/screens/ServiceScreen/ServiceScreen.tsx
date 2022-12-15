import { CustomHeader } from 'components/CustomHeader/CustomHeader'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps'

import styleConfig from './ServiceScreen.style'
export default function App() {
  const styles = useStyles(styleConfig)
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFC7C7" />
      <MapView
        style={styles.map}
        provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <CustomHeader bgColor="#FFC7C7" text={'Радус поиска 500 метров'} />
    </View>
  )
}
