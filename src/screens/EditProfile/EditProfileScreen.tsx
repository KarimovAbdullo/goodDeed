// import Typo from 'components/typo'
import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
// import { CustomHeader } from 'components/CustomHeader/CustomHeader'
import { Input } from 'components/Input/Input'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import I18n from 'i18n-js'
import React from 'react'
import { useLayoutEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import R from 'res'
import { lang } from 'utils/lang'
import { getDefaultScreenOptions } from 'utils/navigation'

const T = R.lang.screen_editProfile

import stylesConfig from './EditProfileScreen.styles'

export const EditProfileScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()

  console.log(lang(`${T}.profile`))
  I18n.locale = 'en'
  console.log(lang(`${T}.profile`))

  const goCard = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_ADD_CARD)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getDefaultScreenOptions(colors),
    })
  }, [colors])

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.gray} />

      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Input name={lang(`${T}.inputName`)} container={styles.input} />

          <Input name={lang(`${T}.inputLabel`)} container={styles.input} />

          <Input name={lang(`${T}.inputTitle`)} container={styles.input} />

          <Input name={lang(`${T}.inputText`)} container={styles.input} />

          <Typo.TextButton type="regular2" color="textSecondary">
            {lang(`${T}.text`)}
          </Typo.TextButton>

          <TouchableOpacity style={styles.addImageContainer}>
            <R.icons.AddFotoIcon />
          </TouchableOpacity>

          <Typo.TextButton type="regular2" color="textSecondary">
            {lang(`${T}.title`)}
          </Typo.TextButton>

          <ButtonSecondary
            text={lang(`${T}.buttonText`)}
            style={styles.button}
            onPress={goCard}
          />
        </View>
        <CustomButton text={lang(`${T}.buttonLabel`)} />
      </View>
    </KeyboardAwareScrollView>
  )
}
