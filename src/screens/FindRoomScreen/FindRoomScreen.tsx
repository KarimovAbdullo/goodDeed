import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import CheckBox from 'components/CheckBox/ CheckBox'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Hr from 'components/Hr'
import { Input } from 'components/Input/Input'
import MultiImageUpload from 'components/MultiImageUpload'
import Typo from 'components/typo'
import { Formik } from 'formik'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useRef } from 'react'
import { useLayoutEffect } from 'react'
import {
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native'
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps'
import R from 'res'
import { getFindRoomScreenOptions } from 'utils/navigation'

import styleConfig from './FindRoomScreen.style'

const FindRoomScreen = () => {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()
  const [active, setActive] = React.useState(false)
  const bottomsheetRef = useRef<BottomSheetModal | null>(null)
  const [inputValue, setInputValue] = React.useState('')
  const [modalInput, setModalInput] = React.useState('')

  const onBottomSheetButton = () => {
    bottomsheetRef.current?.present()
  }

  const tokyoRegion = {
    latitude: 59.92892117572841,
    longitude: 30.30179802328348,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getFindRoomScreenOptions(colors),
    })
  }, [colors])

  const onPress = () => {
    setActive(!active)
  }

  const goFindSearch = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_FIND_SEARCH)
  }

  const searchAdress = () => {
    bottomsheetRef.current?.present()
    setModalInput(inputValue)
  }

  const onSubmit = () => {}

  const initialValues = {
    photo: '',
  }

  return (
    <View style={styles.main}>
      <View style={styles.itemContent}>
        <FocusAwareStatusBar backgroundColor={R.colors.greenHeader} />

        {active ? null : (
          <>
            <TouchableOpacity
              style={styles.iconSearch}
              onPress={onBottomSheetButton}>
              <R.icons.SearchIcon />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconLocation}
              onPress={goFindSearch}>
              <R.icons.LocatsiyaIcon />
            </TouchableOpacity>
          </>
        )}

        <Typo.Body type="small" color="textSecondary" style={styles.topTitle}>
          Выберите свой вариант
        </Typo.Body>

        <View style={styles.checkContent}>
          <CheckBox
            onPress={onPress}
            text={'Я потерял'}
            checkStyle={active ? styles.active : styles.error}
          />

          <CheckBox
            onPress={onPress}
            text={'Я нашёл'}
            checkStyle={active ? styles.error : styles.active}
          />
        </View>

        {active ? (
          <>
            <Typo.Body
              type="small"
              color="textSecondary"
              style={styles.topTitle}>
              Если Вы нашли чью-то утерянную вещь сделайте её фото
            </Typo.Body>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.imageContent}>
              <View style={styles.addImageContainer}>
                <Image
                  source={require('../../assets/images/1.png')}
                  style={styles.image}
                />
              </View>

              <View style={styles.addImageContainer}>
                <Image
                  source={require('../../assets/images/2.png')}
                  style={styles.image}
                />
              </View>

              <Formik onSubmit={onSubmit} initialValues={initialValues}>
                {() => <MultiImageUpload name="photo" />}
              </Formik>
            </ScrollView>

            <Typo.Body
              type="small"
              color="textSecondary"
              style={styles.topTitle}>
              Укажите адрес где Вы её нашли:
            </Typo.Body>

            <View style={styles.inputContent}>
              <Input
                style={styles.input}
                inputStyle={styles.inputContainer}
                value={inputValue}
                onChangeText={setInputValue}
              />

              <CustomButton
                text={'Найти'}
                style={styles.button}
                onPress={searchAdress}
              />
            </View>

            <Typo.Body
              type="small"
              color="textSecondary"
              style={styles.topTitle}>
              Если Вы сейчас находитесь в этом месте, просто отметьте свою
              геолокацию:
            </Typo.Body>

            <ButtonSecondary
              textStyle={styles.textButton}
              text={'Отметить геолакацию'}
              style={styles.buttonSecondary}
            />

            <Typo.Body type="small" color="textSecondary">
              При необходимости оставьте комментарии:
            </Typo.Body>

            <View style={styles.textContent}>
              <Typo.Body type="regular18" color="textPrimary">
                Нужно сделать фото автомобиля BMW X5 г/н у167св 199 RUS который
                стоит на площадке г. Москва ул. Трудовая 7
              </Typo.Body>
            </View>
          </>
        ) : (
          <>
            <Typo.Body type="small" color="textSecondary">
              Если вы потеряли что-то, укажите адрес где Вы могли потерять вещь,
              отметьте на карте место или составьте по карте маршрут, на котором
              Вы могли потерять вещь
            </Typo.Body>

            <View style={styles.mapContent}>
              <MapView
                style={styles.map}
                onPress={e => console.log(e.nativeEvent)}
                provider={
                  Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE
                }
                initialRegion={tokyoRegion}>
                <Marker
                  onPress={onBottomSheetButton}
                  coordinate={{
                    latitude: 59.92892117572841,
                    longitude: 30.30179802328348,
                  }}>
                  <TouchableOpacity>
                    <R.icons.MapIcon />
                  </TouchableOpacity>
                </Marker>
              </MapView>
            </View>
          </>
        )}
        <BottomSheet snapPoints={['90%']} ref={bottomsheetRef}>
          <View style={styles.sheetSearch}>
            <View style={styles.searchContainer}>
              <Input
                style={styles.sheetInput}
                value={modalInput}
                onChangeText={setModalInput}
              />

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

        <CustomButton
          text={'Опубликовать'}
          style={styles.buttonPrimary}
          onPress={goFindSearch}
        />
      </View>
    </View>
  )
}

export default FindRoomScreen
