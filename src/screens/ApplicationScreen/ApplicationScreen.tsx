import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { s } from 'react-native-size-matters'
import R from 'res'

import styleConfig from './ApplicationScreen.style'
const ApplicationScreen = () => {
  const styles = useStyles(styleConfig)
  const [status, setStatus] = useState(false)

  const pressStatusBtn = () => {
    setStatus(!true)
  }
  return (
    <Container>
      <FocusAwareStatusBar backgroundColor={R.colors.headerRed} />
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
        {status ? <ButtonSecondary text={'sadas'} /> : null}

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
        <View style={styles.btnCard}>
          <CustomButton text={'Выполнить заявку'} onPress={pressStatusBtn} />
        </View>
      </View>
    </Container>
  )
}
export default ApplicationScreen
