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
import { getDefaultScreenOptions } from 'utils/navigation'

import styleConfig from './RequestService.style'

const RequstService = () => {
  const styles = useStyles(styleConfig)
  const colors = useColors()
  const navigation = useSmartNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getDefaultScreenOptions(colors),
    })
  }, [colors])
  return (
    <Container>
      <FocusAwareStatusBar backgroundColor={R.colors.gray} />
      <View style={styles.main}>
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
          Что нужно сделать:
        </Typo.Body>

        <Typo.Body type="user18" color="textPrimary" style={styles.title}>
          Нужно сделать фото автомобиля BMW X5 г/н у167св 199 RUS который стоит
          на площадке г. Москва ул. Трудовая 7
        </Typo.Body>

        <Typo.Body type="small" color="textSecondary">
          Вознаграждение:
        </Typo.Body>

        <Typo.Body type="fill" color="textPrimary" style={styles.price}>
          5 евро
        </Typo.Body>
        <View style={styles.btnCard} />

        <ButtonSecondary
          text={'Редактировать заявку'}
          style={styles.button}
          textStyle={styles.textButton}
        />

        <ButtonSecondary
          text={'Посмотреть отклики'}
          style={styles.button}
          textStyle={styles.textButton}
        />
      </View>
      <View style={styles.btn}>
        <CustomButton text={'Удалить заявку'} />
      </View>
    </Container>
  )
}

export default RequstService
