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
import { getNewApplicationScreensOptions } from 'utils/navigation'

import styleConfig from './OrderScreen.styles'

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
    navigation.navigate(R.routes.ROOT_MAIN)
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
          Дата размещения заказа:
        </Typo.TextButton>

        <Typo.Body color="textPrimary"> 15.06.2021</Typo.Body>

        <View style={styles.dataContent}>
          <Typo.TextButton color="textSecondary">
            {'  '}
            Что нужно сделать:
          </Typo.TextButton>

          <View style={styles.textContent}>
            <Typo.Title type="regular">
              Нужно сделать фото автомобиля BMW X5 г/н у167св 199 RUS который
              стоит на площадке г. Москва ул. Трудовая 7
            </Typo.Title>
          </View>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Typo.TextButton color="textSecondary">
            {'  '} Вознаграждение:
          </Typo.TextButton>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Typo.Title type="regular2" color="textPrimary">
            {'  '}5 евро
          </Typo.Title>
        </View>

        <View style={{ flexDirection: 'row' }}>
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
        <CustomButton text={'Завершить заяку'} onPress={goHome} />
      ) : (
        <>
          <ButtonSecondary
            onPress={asd ? onPress : steret}
            text={'Завершить заявку'}
            style={active ? styles.buttonPremary : styles.buttonSecondary}
          />

          <ButtonSecondary
            onPress={onPress}
            text={
              active ? 'Снять заяку с публикации' : 'Снять заявку с публикации'
            }
            style={active ? styles.buttonSecondary : styles.buttonPremary}
          />
        </>
      )}
    </View>
  )
}
export default OrderScreen
