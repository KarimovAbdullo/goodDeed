import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate'
import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import CustomModal from 'components/CustomModal/CustomModal'
import Hr from 'components/Hr'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'

const T = R.lang.screen_profile

import stylesConfig from './ProfileScreen.styles'

export const ProfileScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()
  const [topModal, setTopModal] = useState(false)

  const onClosed1 = () => {
    setTopModal(!topModal)
  }

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

  const goLostScreen = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_LOST_ITEMS)
  }

  return (
    <SafeAreaView style={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.gray} />

      <View style={styles.container}>
        <View style={styles.avatarContent}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.image}
          />

          <View style={styles.avatarTextContent}>
            <Typo.TextButton color="textSecondary" type="regular1">
              {lang(`${T}.title`)}
            </Typo.TextButton>

            <Typo.Body color="black" type="regular18">
              Сергей
            </Typo.Body>

            <Typo.TextButton color="textSecondary" type="regular1">
              {lang(`${T}.subTitle`)}
            </Typo.TextButton>

            <Typo.Body>15.06.2021</Typo.Body>

            <Typo.TextButton color="textSecondary" type="regular1">
              {lang(`${T}.text`)}
            </Typo.TextButton>

            <Typo.Body>
              8,9 <R.icons.VectorIcon /> <R.icons.VectorIcon />{' '}
              <R.icons.VectorIcon /> <R.icons.SmileIcon /> <R.icons.SmileIcon />
            </Typo.Body>

            <Typo.TextButton color="textSecondary" type="regular1">
              {lang(`${T}.label`)}
            </Typo.TextButton>

            <Typo.Body>45 евро</Typo.Body>
          </View>
        </View>

        <ButtonSecondary
          text={lang(`${T}.buttonText`)}
          style={styles.button}
          textStyle={styles.textButton}
          onPress={goEditProfile}
        />

        <ButtonSecondary
          text={lang(`${T}.buttonSubText`)}
          style={styles.button}
          textStyle={styles.textButton}
        />

        <TouchableOpacity style={styles.proContent} onPress={onClosed1}>
          <Text style={styles.textProContent}>Pro</Text>
        </TouchableOpacity>

        <Hr style={styles.hr} />

        <ButtonNavigate
          name={lang(`${T}.navButtonText`)}
          text={lang(`${T}.navButtonSubText`)}
          onPress={goMyGoodDeed}
        />

        <Hr style={styles.hrInlene} />

        <ButtonNavigate
          name={lang(`${T}.navButtonLabel`)}
          text={lang(`${T}.navButtonSubLabel`)}
          onPress={goMyService}
        />

        <Hr style={styles.hrInlene} />

        <ButtonNavigate
          name={lang(`${T}.navButtonTitle`)}
          text={lang(`${T}.navButtonSubTitle`)}
          onPress={goLostScreen}
        />
      </View>

      <CustomModal
        back={onClosed1}
        text={lang(`${T}.modalText`)}
        visible={topModal}
        onClose={onClosed1}
        style={styles.padding}
        buttonPrimary={lang(`${T}.modalButton`)}
      />
    </SafeAreaView>
  )
}
