import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import { Input } from 'components/Input/Input'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import I18n from 'i18n-js'
import React, { useRef } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import R from 'res'
import { lang } from 'utils/lang'

import stylesConfig from './LoginScreen.styles'

const T = R.lang.screen_login

const LoginScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)

  const goRootMain = () => {
    navigation.navigate(R.routes.ROOT_MAIN)
  }

  const onBottomSheetButton = () => {
    bottomsheetRef2.current?.present()
  }
  // I18n.
  const onRussian = () => {
    I18n.locale = 'ru'
    bottomsheetRef2.current?.close()
  }

  const onEnglish = () => {
    I18n.locale = 'en'
    bottomsheetRef2.current?.close()
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.background} />

      <View style={styles.itemContainer}>
        <View style={styles.container}>
          <View style={styles.changeLanguageContent}>
            <TouchableOpacity onPress={onBottomSheetButton}>
              <Text style={styles.languageText}>{lang(`${T}.label`)}</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
          />

          <Typo.Headline type="bold20" color={'black'} center>
            {lang(`${T}.title`)}
          </Typo.Headline>

          <View style={styles.inputContent}>
            <Input
              name={lang(`${T}.name`)}
              icon={<R.icons.AcountIcon />}
              placeholder={'Владимир'}
            />
            <Input
              name={lang(`${T}.phone`)}
              icon={<R.icons.MobileIcon />}
              placeholder={'+7 (920) 454 45 45'}
            />
          </View>

          <Typo.Body type="regular14" color={'textSecondary'} center>
            {lang(`${T}.text`)}
          </Typo.Body>

          <Typo.Body type="regular14" color={'textSecondary'} center>
            {lang(`${T}.endtext`)}
          </Typo.Body>
        </View>

        <CustomButton text={lang(`${T}.btn`)} onPress={goRootMain} />
      </View>
      <BottomSheet snapPoints={['25%']} ref={bottomsheetRef2}>
        <View>
          <CustomButton text={'Russian'} onPress={onRussian} />

          <CustomButton text={'English'} onPress={onEnglish} />
        </View>
      </BottomSheet>
    </KeyboardAwareScrollView>
  )
}

export default LoginScreen
