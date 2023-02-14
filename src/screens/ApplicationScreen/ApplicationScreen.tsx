import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import { useLayoutEffect } from 'react'
import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { s } from 'react-native-size-matters'
import R from 'res'
import { lang } from 'utils/lang'
import { getApplicationScreenOptions } from 'utils/navigation'

import styleConfig from './ApplicationScreen.style'
const T = R.lang.screen_application

const ApplicationScreen = () => {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()
  const [status, setStatus] = useState(false)

  const GoBtnCoplited = () => {
    setStatus(true)
  }

  const GoChatScreen = () => {
    navigation.navigate(R.routes.SCREEN_CHAT)
  }

  const GoReviewScreen = () => {
    navigation.navigate(R.routes.SCREEN_REVIEW)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getApplicationScreenOptions(colors),
    })
  }, [colors])

  return (
    <Container>
      <FocusAwareStatusBar backgroundColor={R.colors.headerRed} />
      <View style={styles.main}>
        <Typo.Body type="small" color="textSecondary">
          {lang(`${T}.customer`)}
        </Typo.Body>

        <View style={styles.userCard}>
          <Image
            source={require('../../assets/images/icon.png')}
            style={styles.img}
          />

          <View style={styles.userTitle}>
            <Typo.Body type="user18" color="textPrimary">
              Владимир
            </Typo.Body>

            <View style={styles.grade}>
              <Typo.Body type="regular12" color="textPrimary">
                5,6 <R.icons.VectorIcon size={s(8)} />{' '}
                <R.icons.VectorIcon size={s(8)} />{' '}
                <R.icons.VectorIcon size={s(8)} />{' '}
                <R.icons.SmileIcon size={s(8)} />{' '}
                <R.icons.SmileIcon size={s(8)} />
              </Typo.Body>
            </View>
          </View>
        </View>
        {status ? (
          <ButtonSecondary
            text={lang(`${T}.btnContact`)}
            onPress={GoChatScreen}
            style={styles.btn}
          />
        ) : null}
        <View />

        <Typo.Body
          type="small"
          color="textSecondary"
          style={styles.dateSection}>
          {lang(`${T}.dateTitle`)}
        </Typo.Body>

        <Typo.Body type="fill" color="textPrimary">
          15.06.2021
        </Typo.Body>

        <Typo.Body type="small" color="textSecondary" style={styles.smallText}>
          {lang(`${T}.appTitle`)}
        </Typo.Body>

        <Typo.Body type="user18" color="textPrimary" style={styles.title}>
          Нужно сделать фото автомобиля BMW X5 г/н у167св 199 RUS который стоит
          на площадке г. Москва ул. Трудовая 7
        </Typo.Body>

        <Typo.Body type="small" color="textSecondary">
          {lang(`${T}.reward`)}
        </Typo.Body>

        <Typo.Body type="fill" color="textPrimary" style={styles.price}>
          5 евро
        </Typo.Body>
        <View style={styles.btnCard}>
          {status ? (
            <ButtonSecondary
              text={lang(`${T}.btnRefuse`)}
              style={styles.btnSecond}
            />
          ) : null}
          <CustomButton
            text={status ? lang(`${T}.btnEnd`) : lang(`${T}.btnComplete`)}
            onPress={status ? GoReviewScreen : GoBtnCoplited}
          />
        </View>
      </View>
    </Container>
  )
}
export default ApplicationScreen
