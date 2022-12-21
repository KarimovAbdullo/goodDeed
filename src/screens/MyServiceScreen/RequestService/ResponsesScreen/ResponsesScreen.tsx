import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { useLayoutEffect } from 'react'
import { Image, View } from 'react-native'
import R from 'res'
import { getDefaultScreenOptions } from 'utils/navigation'

import styleConfig from './ResponsesScreen.style'

const ResponsesScreen = () => {
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

      <Typo.Body type="small" color="textSecondary" style={styles.date}>
        4 сентября 2021г.
      </Typo.Body>

      <View style={styles.main}>
        <Image
          source={require('./../../../../assets/images/Elli.png')}
          style={styles.img}
        />
        <View style={styles.card}>
          <View style={styles.info}>
            <Typo.Body type="regular14" color="orange">
              Светлана
            </Typo.Body>

            <View style={styles.iconCard}>
              <Typo.Body type="small" color="textSecondary">
                Карма:
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
        <CustomButton text={'Удалить заявку'} />
      </View>
    </Container>
  )
}

export default ResponsesScreen
