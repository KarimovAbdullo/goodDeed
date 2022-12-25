import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import CustomModal from 'components/CustomModal/CustomModal'
import Hr from 'components/Hr'
import { Input } from 'components/Input/Input'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import I18n from 'i18n-js'
import React, { useEffect, useRef, useState } from 'react'
import { Platform, TouchableOpacity, View } from 'react-native'
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps'
import R from 'res'
import { lang } from 'utils/lang'

const T = R.lang.screen_createApplication

import styleConfig from './CreateApplication.styles'

export default function CreateApplicationScreen() {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const bottomsheetRef = useRef<BottomSheetModal | null>(null)
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)
  const [openModal, setOpenModal] = useState(false)
  const [topModal, setTopModal] = useState(false)

  console.log(lang(`${T}.home`))
  I18n.locale = 'en'
  console.log(lang(`${T}.home`))

  const tokyoRegion = {
    latitude: 59.92892117572841,
    longitude: 30.30179802328348,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  useEffect(() => {
    setTimeout(() => {
      startModal()
      Modal1()
    }, 3000)
    setOpenModal(false)
    setTopModal(false)
  }, [])

  const startModal = () => {
    setOpenModal(true)
  }

  const Modal1 = () => {
    setOpenModal(true)
  }

  const onClosed = () => {
    setOpenModal(false)
  }

  const onClosed1 = () => {
    setTopModal(false)
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
          <TouchableOpacity>
            <R.icons.MapIcon />
          </TouchableOpacity>
        </Marker>
      </MapView>

      <BottomSheet snapPoints={['90%']} ref={bottomsheetRef}>
        <View style={styles.sheetSearch}>
          <View style={styles.searchContainer}>
            <Input style={styles.inputContent} />

            <CustomButton
              text={lang(`${T}.inputTitle`)}
              style={styles.button}
            />
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
            {lang(`${T}.BottomSheetText`)}
          </Typo.Body>

          <ButtonSecondary
            text={lang(`${T}.modalTitle`)}
            style={styles.buttonSecondary}
          />

          <CustomButton text={lang(`${T}.modalSubTitle`)} />
        </View>
      </BottomSheet>

      <CustomModal
        back={onClosed}
        text={lang(`${T}.title`)}
        buttonTitle={lang(`${T}.buttonText`)}
        visible={openModal}
        onClose={onClosed}
      />

      <CustomModal
        back={onClosed1}
        text={lang(`${T}.label`)}
        visible={topModal}
        onClose={onClosed1}
        style={styles.padding}
      />
    </View>
  )
}
