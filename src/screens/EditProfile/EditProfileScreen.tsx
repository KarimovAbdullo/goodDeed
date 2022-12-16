// import Typo from 'components/typo'
import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import { CustomButton } from 'components/CustomButton/CustomButton'
import { Input } from 'components/Input/Input'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { StatusBar, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import R from 'res'

import stylesConfig from './EditProfileScreen.styles'

export const EditProfileScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()

  const goCard = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_ADD_CARD)
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.itemContent}>
      <StatusBar backgroundColor={R.colors.white} />

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
