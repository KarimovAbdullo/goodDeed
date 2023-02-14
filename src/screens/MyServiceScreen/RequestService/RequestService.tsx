import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { useLayoutEffect } from 'react'
import { View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'
import { getDefaultScreenOptions } from 'utils/navigation'

import styleConfig from './RequestService.style'

const T = R.lang.screen_requstService

const RequstService = () => {
  const styles = useStyles(styleConfig)
  const colors = useColors()
  const navigation = useSmartNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getDefaultScreenOptions(colors),
    })
  }, [colors])

  const goResponses = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_RESPONSES)
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

        <ButtonSecondary
          text={lang(`${T}.buttonText`)}
          style={styles.button}
          textStyle={styles.textButton}
        />

        <ButtonSecondary
          text={lang(`${T}.buttonLabel`)}
          style={styles.button}
          textStyle={styles.textButton}
          onPress={goResponses}
        />
      </View>
      <View style={styles.btn}>
        <CustomButton text={lang(`${T}.button`)} />
      </View>
    </Container>
  )
}

export default RequstService
