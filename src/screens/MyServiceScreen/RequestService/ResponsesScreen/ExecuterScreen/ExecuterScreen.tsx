import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import I18n from 'i18n-js'
import React from 'react'
import { useLayoutEffect } from 'react'
import { Image, Text, View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'
import { getDefaultScreenOptions } from 'utils/navigation'

import styleConfig from './ExecuterScreen.style'

const T = R.lang.screen_executer

const ExecuterScreen = () => {
  const styles = useStyles(styleConfig)
  const colors = useColors()
  const navigation = useSmartNavigation()

  console.log(lang(`${T}.profile`))
  I18n.locale = 'en'
  console.log(lang(`${T}.profile`))

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getDefaultScreenOptions(colors),
    })
  }, [colors])

  const goReview = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_READREVIEW)
  }
  return (
    <Container>
      <FocusAwareStatusBar backgroundColor={R.colors.gray} />
      <View>
        <View style={styles.avatarCard}>
          <Image
            source={require('../../../../../assets/images/avatarr.png')}
            style={styles.img}
          />
          <View style={styles.proContent}>
            <Text style={styles.textProContent}>Pro</Text>
          </View>
        </View>

        <View style={styles.avatarTextContent}>
          <Typo.Body color="textSecondary" type="small">
            {lang(`${T}.title`)}
          </Typo.Body>

          <Typo.Body color="black" type="fill" style={styles.mb}>
            Ирина
          </Typo.Body>

          <Typo.Body color="textSecondary" type="small">
            {lang(`${T}.subTitle`)}
          </Typo.Body>

          <Typo.Body type="fill" color="black" style={styles.mb}>
            15.06.2021
          </Typo.Body>

          <Typo.TextButton color="textSecondary" type="regular1">
            {lang(`${T}.text`)}
          </Typo.TextButton>

          <Typo.Body type="fill" style={styles.mb}>
            8,9 <R.icons.VectorIcon /> <R.icons.VectorIcon />{' '}
            <R.icons.VectorIcon /> <R.icons.SmileIcon /> <R.icons.SmileIcon />
          </Typo.Body>

          <Typo.Body color="textSecondary" type="small">
            {lang(`${T}.label`)}
          </Typo.Body>
          <View style={styles.info}>
            <Typo.Body type="fill" color="black">
              {lang(`${T}.subLabel`)}
            </Typo.Body>

            <ButtonSecondary
              text={lang(`${T}.navButtonText`)}
              style={styles.button}
              textStyle={styles.textButton}
              onPress={goReview}
            />
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <CustomButton text={lang(`${T}.navButtonSubText`)} />
      </View>
    </Container>
  )
}

export default ExecuterScreen
