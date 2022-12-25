import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { useLayoutEffect } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'
import { getDefaultScreenOptions } from 'utils/navigation'

import styleConfig from './ResponsesScreen.style'

const T = R.lang.screen_responses

const ResponsesScreen = () => {
  const styles = useStyles(styleConfig)
  const colors = useColors()
  const navigation = useSmartNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getDefaultScreenOptions(colors),
    })
  }, [colors])

  const goBack = () => {
    navigation.goBack()
  }

  const GoExecuter = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_EXECUTER)
  }

  return (
    <Container>
      <FocusAwareStatusBar backgroundColor={R.colors.gray} />

      <Typo.Body type="small" color="textSecondary" style={styles.date}>
        {lang(`${T}.title`)}
      </Typo.Body>

      <View style={styles.main}>
        <TouchableOpacity onPress={GoExecuter}>
          <Image
            source={require('./../../../../assets/images/Elli.png')}
            style={styles.img}
          />
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.info}>
            <Typo.Body type="regular14" color="orange">
              Светлана
            </Typo.Body>

            <View style={styles.iconCard}>
              <Typo.Body type="small" color="textSecondary">
                {lang(`${T}.subTitle`)}
              </Typo.Body>

              <Typo.Body type="fill" color="textPrimary" style={styles.icon}>
                8,9 <R.icons.VectorIcon /> <R.icons.VectorIcon />{' '}
                <R.icons.VectorIcon /> <R.icons.VectorIcon />{' '}
                <R.icons.VectorIcon />
              </Typo.Body>

              <Typo.Body type="small10" style={styles.time}>
                16:30
              </Typo.Body>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <CustomButton text={lang(`${T}.button`)} onPress={goBack} />
      </View>
    </Container>
  )
}

export default ResponsesScreen
