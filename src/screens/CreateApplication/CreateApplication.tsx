import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Hr from 'components/Hr'
import { Input } from 'components/Input/Input'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useRef } from 'react'
import { Platform, TouchableOpacity, View } from 'react-native'
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps'
import R from 'res'

import styleConfig from './CreateApplication.styles'

export default function CreateApplicationScreen() {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const bottomsheetRef = useRef<BottomSheetModal | null>(null)
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)

  const tokyoRegion = {
    latitude: 59.92892117572841,
    longitude: 30.30179802328348,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const onPressMap = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_NEW_APPLICATION)
  }

  const onBottomSheet = () => {
    bottomsheetRef.current?.present()
  }

  const onBottomSheetButton = () => {
    bottomsheetRef2.current?.present()
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <TouchableOpacity style={styles.iconSearch} onPress={onBottomSheet}>
        <R.icons.SearchIcon />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconLocation}
        onPress={onBottomSheetButton}>
        <R.icons.LocatsiyaIcon />
      </TouchableOpacity>

      <TouchableOpacity style={styles.location} onPress={onPressMap}>
        <R.icons.MapIcon />
      </TouchableOpacity>

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
          }}
        />
      </MapView>

      <BottomSheet snapPoints={['90%']} ref={bottomsheetRef}>
        <View style={styles.sheetSearch}>
          <View style={styles.searchContainer}>
            <Input style={styles.inputContent} />

            <CustomButton text={'Найти'} style={styles.button} />
          </View>

          <View style={styles.seacrhContent}>
            <Typo.TextButton>улица Столетова, 2 </Typo.TextButton>

            <Typo.TextButton color="textSecondary">
              Приокский район, Нижний Новгород, Россия
            </Typo.TextButton>

            <Hr style={styles.Hr} />

            <Typo.TextButton>улица Столетова, 2 </Typo.TextButton>

            <Typo.TextButton color="textSecondary">
              Приокский район, Нижний Новгород, Россия
            </Typo.TextButton>

            <Hr style={styles.Hr} />

            <Typo.TextButton>улица Столетова, 2 </Typo.TextButton>

            <Typo.TextButton color="textSecondary">
              Приокский район, Нижний Новгород, Россия
            </Typo.TextButton>

            <Hr style={styles.Hr} />

            <Typo.TextButton>улица Столетова, 2 </Typo.TextButton>

            <Typo.TextButton color="textSecondary">
              Приокский район, Нижний Новгород, Россия
            </Typo.TextButton>

            <Hr style={styles.Hr} />
          </View>
        </View>
      </BottomSheet>

      <BottomSheet snapPoints={['33%']} ref={bottomsheetRef2}>
        <View>
          <Typo.Body center type="regular16" style={styles.textContent}>
            Вы подтверждаете адрес?
          </Typo.Body>

          <ButtonSecondary text={'Изменить'} style={styles.buttonSecondary} />

          <CustomButton text={'Подтвердить'} />
        </View>
      </BottomSheet>
    </View>
  )
}