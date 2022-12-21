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
import { Image, Text, View } from 'react-native'
import R from 'res'
import { getDefaultScreenOptions } from 'utils/navigation'

import styleConfig from './ExecuterScreen.style'

const ExecuterScreen = () => {
  const styles = useStyles(styleConfig)
  const colors = useColors()
  const navigation = useSmartNavigation()

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
            Имя:
          </Typo.Body>

          <Typo.Body color="black" type="fill" style={styles.mb}>
            Ирина
          </Typo.Body>

          <Typo.Body color="textSecondary" type="small">
            Дата регистрации в проекте:
          </Typo.Body>

          <Typo.Body type="fill" color="black" style={styles.mb}>
            15.06.2021
          </Typo.Body>

          <Typo.TextButton color="textSecondary" type="regular1">
            Карма:
          </Typo.TextButton>

          <Typo.Body type="fill" style={styles.mb}>
            8,9 <R.icons.VectorIcon /> <R.icons.VectorIcon />{' '}
            <R.icons.VectorIcon /> <R.icons.SmileIcon /> <R.icons.SmileIcon />
          </Typo.Body>

          <Typo.Body color="textSecondary" type="small">
            Отзывы:
          </Typo.Body>
          <View style={styles.info}>
            <Typo.Body type="fill" color="black">
              9 отзывов
            </Typo.Body>

            <ButtonSecondary
              text={'Прочитать отзывы'}
              style={styles.button}
              textStyle={styles.textButton}
              onPress={goReview}
            />
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <CustomButton text={'Выбрать исполнителем'} />
      </View>
    </Container>
  )
}

export default ExecuterScreen
