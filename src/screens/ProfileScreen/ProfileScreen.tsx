import BottomSheet from 'components/BottomSheet'
import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate'
import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Hr from 'components/Hr'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import R from 'res'

import stylesConfig from './ProfileScreen.styles'

export const ProfileScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()

  const goEditProfile = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_EDIT_PROFILE)
  }
  const goMyService = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_MYSERVICE)
  }

  const goMyGoodDeed = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_MYGOODDEED)
  }

  return (
    <View style={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.gray} />

      <View style={styles.container}>
        <View style={styles.avatarContent}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.image}
          />

          <View style={styles.avatarTextContent}>
            <Typo.TextButton color="textSecondary" type="regular1">
              Имя:
            </Typo.TextButton>

            <Typo.Body color="black" type="regular18">
              Сергей
            </Typo.Body>

            <Typo.TextButton color="textSecondary" type="regular1">
              Дата регистрации в проекте:
            </Typo.TextButton>

            <Typo.Body>15.06.2021</Typo.Body>

            <Typo.TextButton color="textSecondary" type="regular1">
              Карма:
            </Typo.TextButton>

            <Typo.Body>
              8,9 <R.icons.VectorIcon /> <R.icons.VectorIcon />{' '}
              <R.icons.VectorIcon /> <R.icons.SmileIcon /> <R.icons.SmileIcon />
            </Typo.Body>

            <Typo.TextButton color="textSecondary" type="regular1">
              Баланс
            </Typo.TextButton>

            <Typo.Body>45 евро</Typo.Body>
          </View>
        </View>

        <ButtonSecondary
          text={'Редактировать профиль'}
          style={styles.button}
          textStyle={styles.textButton}
          onPress={goEditProfile}
        />

        <ButtonSecondary
          text={'Пополнить баланс'}
          style={styles.button}
          textStyle={styles.textButton}
        />

        <TouchableOpacity style={styles.proContent}>
          <Text style={styles.textProContent}>Pro</Text>
        </TouchableOpacity>

        <Hr style={styles.hr} />

        <ButtonNavigate
          name={'Ваши добрые дела'}
          text={'  23 выполненых дела'}
          onPress={goMyGoodDeed}
        />

        <Hr style={styles.hrInlene} />

        <ButtonNavigate
          name={'Ваша запросы на услугу'}
          text={'3 активных запроса'}
          onPress={goMyService}
        />

        <Hr style={styles.hrInlene} />

        <ButtonNavigate
          name={'Ваша комната находок'}
          text={'0 ноходок / потеряных вещей'}
        />
      </View>
      <BottomSheet children={'dsdsds'} />
    </View>
  )
}
