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
import React from 'react'
import { useLayoutEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import R from 'res'
import { getDefaultScreenOptions } from 'utils/navigation'

import stylesConfig from './EditProfileScreen.styles'

export const EditProfileScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()

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
          <Input name="Имя *" container={styles.input} />

          <Input
            name="Фамилия (обязательно для стутуса Pro)"
            container={styles.input}
          />

          <Input name="Телефон *" container={styles.input} />

          <Input
            name="E-mail (обязательно для стутуса Pro)"
            container={styles.input}
          />

          <Typo.TextButton type="regular2" color="textSecondary">
            Ваша фото с паспортом открытым на странице с фото (обязательно для
            стутуса Pro)
          </Typo.TextButton>

          <TouchableOpacity style={styles.addImageContainer}>
            <R.icons.AddFotoIcon />
          </TouchableOpacity>

          <Typo.TextButton type="regular2" color="textSecondary">
            Для олаты / получения вознаграждения необходимо добавить банковскую
            карту (обязательно для статуса Pro)
          </Typo.TextButton>

          <ButtonSecondary
            text={'Добавить карту'}
            style={styles.button}
            onPress={goCard}
          />
        </View>
        <CustomButton text={'Сохранить'} />
      </View>
    </KeyboardAwareScrollView>
  )
}
