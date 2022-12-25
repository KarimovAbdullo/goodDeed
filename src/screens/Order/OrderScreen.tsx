import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import { useLayoutEffect } from 'react'
import React from 'react'
import { Image, View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'
import { getNewApplicationScreensOptions } from 'utils/navigation'

import styleConfig from './OrderScreen.styles'

const T = R.lang.screen_order

const OrderScreen = () => {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()
  const [active, setActive] = React.useState(false)
  const [asd, setAsd] = React.useState(false)

  const onPress = () => {
    setActive(!active)
  }

  const steret = () => {
    setAsd(!asd)
  }

  const goHome = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_HOME)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getNewApplicationScreensOptions(colors),
    })
  }, [colors])

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.blue} />
      <View style={styles.itemContent}>
        <Typo.TextButton color="textSecondary">
          {'  '}
          {lang(`${T}.title`)}
        </Typo.TextButton>

        <Typo.Body color="textPrimary"> 15.06.2021</Typo.Body>

        <View style={styles.dataContent}>
          <Typo.TextButton color="textSecondary">
            {'  '}
            {lang(`${T}.subTitle`)}
          </Typo.TextButton>

          <View style={styles.textContent}>
            <Typo.Title type="regular">{lang(`${T}.label`)}</Typo.Title>
          </View>
        </View>

        <View style={styles.containerText}>
          <Typo.TextButton color="textSecondary">
            {'  '} {lang(`${T}.subLabel`)}
          </Typo.TextButton>
        </View>

        <View style={styles.containerText}>
          <Typo.Title type="regular2" color="textPrimary">
            {'  '}5 евро
          </Typo.Title>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.addImageContainer}>
            <Image
              source={require('../../assets/images/1.png')}
              style={styles.image}
            />
          </View>

          <View style={styles.addImageContainer}>
            <Image
              source={require('../../assets/images/1.png')}
              style={styles.image}
            />
          </View>

          <View style={styles.addImageContainer}>
            <Image
              source={require('../../assets/images/1.png')}
              style={styles.image}
            />
          </View>

          <View style={styles.addImageContainer}>
            <Image
              source={require('../../assets/images/1.png')}
              style={styles.image}
            />
          </View>
        </View>
      </View>

      {asd ? (
        <CustomButton text={lang(`${T}.buttonLabel`)} onPress={goHome} />
      ) : (
        <>
          <ButtonSecondary
            onPress={asd ? onPress : steret}
            text={lang(`${T}.buttonLabel`)}
            style={active ? styles.buttonPremary : styles.buttonSecondary}
          />

          <ButtonSecondary
            onPress={onPress}
            text={active ? lang(`${T}.buttonText`) : lang(`${T}.buttonTitle`)}
            style={active ? styles.buttonSecondary : styles.buttonPremary}
          />
        </>
      )}
    </View>
  )
}
export default OrderScreen
