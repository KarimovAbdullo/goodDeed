import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps'
import R from 'res'

import styleConfig from './ServiceScreen.style'
export default function ServiceScreen() {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const tokyoRegion = {
    latitude: 59.92892117572841,
    longitude: 30.30179802328348,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  const onPressMap = () => {
    navigation.navigate(R.routes.SCREEN_APPLICATION)
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFC7C7" />
      <MapView
        style={styles.map}
        onPress={e => console.log(e.nativeEvent)}
        provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
        initialRegion={tokyoRegion}>
        <Marker
          onPress={onPressMap}
          coordinate={{
            latitude: 59.92892117572841,
            longitude: 30.30179802328348,
          }}>
          <View>
            <R.icons.MapIcon />
          </View>
        </Marker>
      </MapView>
    </View>
  )
}
