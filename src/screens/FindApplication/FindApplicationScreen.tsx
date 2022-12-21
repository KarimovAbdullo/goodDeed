import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import { useLayoutEffect } from 'react'
import React from 'react'
import { Image, View } from 'react-native'
import { s } from 'react-native-size-matters'
import R from 'res'
import { getFindRoomScreenOptions } from 'utils/navigation'

import styleConfig from './FindApplicationScreen.styles'

const FindApplicationScreen = () => {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getFindRoomScreenOptions(colors),
    })
  }, [colors])

  return (
    <Container>
      <FocusAwareStatusBar backgroundColor={R.colors.greenHeader} />
      <View style={styles.main}>
        <Typo.Body type="small" color="textSecondary">
          Заказчик:
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

        <ButtonSecondary text={'Связаться с заказчиком'} style={styles.btn} />

        <View />

        <Typo.Body
          type="small"
          color="textSecondary"
          style={styles.dateSection}>
          Дата размещения заказа:
        </Typo.Body>

        <Typo.Body type="fill" color="textPrimary">
          15.06.2021
        </Typo.Body>

        <Typo.Body type="small" color="textSecondary" style={styles.smallText}>
          Что нужно потеряно:
        </Typo.Body>

        <Typo.Body type="user18" color="textPrimary" style={styles.title}>
          Красная шапка
        </Typo.Body>

        <Typo.Body type="small" color="textSecondary">
          Фотография утерянной вещи:
        </Typo.Body>

        <View style={styles.imageContent}>
          <View style={styles.addImageContainer}>
            <Image
              source={require('../../assets/images/1.png')}
              style={styles.image}
            />
          </View>

          <View style={styles.addImageContainer}>
            <Image
              source={require('../../assets/images/2.png')}
              style={styles.image}
            />
          </View>
        </View>

        <View style={styles.btnCard}>
          <CustomButton text={'Я нашёл'} />
        </View>
      </View>
    </Container>
  )
}
export default FindApplicationScreen
