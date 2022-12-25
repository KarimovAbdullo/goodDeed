import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Hr from 'components/Hr'
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

const T = R.lang.screen_myService

import styleConfig from './MyServiceScreen.style'

const MyServiceScreen = () => {
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

  const goRequest = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_REQUESTSERVICE)
  }
  return (
    <Container>
      <View style={styles.main}>
        <FocusAwareStatusBar backgroundColor={R.colors.gray} />

        <Hr style={styles.hrInlene} />

        <ButtonNavigate
          name={lang(`${T}.title`)}
          text={lang(`${T}.subTitle`)}
          onPress={goRequest}
        />

        <Hr style={styles.hrInlene} />

        <ButtonNavigate name={lang(`${T}.text`)} text={lang(`${T}.subText`)} />

        <Hr style={styles.hrInlene} />
      </View>

      <View style={styles.cardBtn}>
        <CustomButton text={lang(`${T}.button`)} />
      </View>
    </Container>
  )
}

export default MyServiceScreen
