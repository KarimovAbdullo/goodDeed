import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import Hr from 'components/Hr'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import R from 'res'

import stylesConfig from './ProfileScreen.styles'

export const ProfileScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()

  const goEditProfile = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_EDIT_PROFILE)
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={R.colors.gray} />

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

      <View style={styles.textContainer}>
        <View>
          <Typo.Body color="textSecondary">Ваши добрые дела</Typo.Body>

          <Typo.TextButton color="orange" type="regular1">
            23 выполненых дела
          </Typo.TextButton>
        </View>

        <TouchableOpacity>
          <R.icons.BackIcon />
        </TouchableOpacity>
      </View>

      <Hr style={styles.hrInlene} />

      <View style={styles.textContainer}>
        <View>
          <Typo.Body color="textSecondary">Ваша запросы на услугу</Typo.Body>

          <Typo.TextButton color="orange" type="regular1">
            3 активных запроса
          </Typo.TextButton>
        </View>

        <TouchableOpacity>
          <R.icons.BackIcon />
        </TouchableOpacity>
      </View>

      <Hr style={styles.hrInlene} />

      <View style={styles.textContainer}>
        <View>
          <Typo.Body color="textSecondary">Ваша комната находок</Typo.Body>

          <Typo.TextButton color="textSecondary" type="regular1">
            0 ноходок / потеряных вещей
          </Typo.TextButton>
        </View>

        <TouchableOpacity>
          <R.icons.BackIcon />
        </TouchableOpacity>
      </View>
    </View>
  )
}
