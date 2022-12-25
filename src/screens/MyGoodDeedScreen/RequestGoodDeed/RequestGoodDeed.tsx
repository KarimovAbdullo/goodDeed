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
import { View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'
import { getDefaultScreenOptions } from 'utils/navigation'

import styleConfig from './RequestGoodDeed.style'

const T = R.lang.screen_requestGoodDeed

const RequestGoodDeed = () => {
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

  const goRevard = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_REVARD)
  }
  return (
    <Container>
      <FocusAwareStatusBar backgroundColor={R.colors.gray} />
      <View style={styles.main}>
        <Typo.Body
          type="small"
          color="textSecondary"
          style={styles.dateSection}>
          {lang(`${T}.title`)}
        </Typo.Body>

        <Typo.Body type="fill" color="textPrimary">
          15.06.2021
        </Typo.Body>

        <Typo.Body type="small" color="textSecondary" style={styles.smallText}>
          {lang(`${T}.subTitle`)}
        </Typo.Body>

        <Typo.Body type="user18" color="textPrimary" style={styles.title}>
          {lang(`${T}.text`)}
        </Typo.Body>

        <Typo.Body type="small" color="textSecondary">
          {lang(`${T}.subText`)}
        </Typo.Body>

        <Typo.Body type="fill" color="textPrimary" style={styles.price}>
          5 евро
        </Typo.Body>
        <View style={styles.btnCard} />
      </View>
      <View style={styles.btn}>
        <CustomButton text={lang(`${T}.button`)} onPress={goRevard} />
      </View>
    </Container>
  )
}

export default RequestGoodDeed
