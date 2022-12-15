// import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Config from 'react-native-config'
import MapView from 'react-native-maps'
// import stylesConfig from './ServiceScreen.style'

const ServiceScreen = () => {
  //   const styles = useStyles(stylesConfig)
  console.log(Config.SIZE_MATTERS_BASE_WIDTH)
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default ServiceScreen
