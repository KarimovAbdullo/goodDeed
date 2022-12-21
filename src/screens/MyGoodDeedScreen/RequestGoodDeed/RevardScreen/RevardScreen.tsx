import CheckBox from 'components/CheckBox/ CheckBox'
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

import styleConfig from './RevardScreen.style'

const RevardScreen = () => {
  const styles = useStyles(styleConfig)
  const colors = useColors()
  const navigation = useSmartNavigation()

  const data = [
    {
      title: 'Qiwi',
      id: '1',
    },
    {
      title: 'Pay Pal',
      id: '2',
    },
    {
      title: 'Банковской картой',
      id: '3',
    },
  ]

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getDefaultScreenOptions(colors),
    })
  }, [colors])

  const GoBankCard = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_BANKCARD)
  }
  return (
    <Container>
      <FocusAwareStatusBar backgroundColor={R.colors.gray} />
      <View style={styles.main}>
        <Typo.Body type="regular16" color="textPrimary" style={styles.title}>
          Выберите удобный способ получения вознаграждения гарантийного счёта:
        </Typo.Body>

        <Typo.Body type="small" color="textSecondary">
          Способ получения познаграждения
        </Typo.Body>

        <Typo.Body type="fill" color="textPrimary" style={styles.price}>
          5 евро
        </Typo.Body>
        <View style={styles.checkBoxContent}>
          {data.map(item => (
            <CheckBox key={item.id} text={item.title} />
          ))}
        </View>
        <View style={styles.btnCard} />
      </View>
      <View style={styles.btn}>
        <CustomButton text={'Продолжить'} onPress={GoBankCard} />
      </View>
    </Container>
  )
}

export default RevardScreen
