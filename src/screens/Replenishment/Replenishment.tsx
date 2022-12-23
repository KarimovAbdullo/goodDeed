import CheckBox from 'components/CheckBox/ CheckBox'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import { useLayoutEffect } from 'react'
import React, { useState } from 'react'
import { View } from 'react-native'
import R from 'res'
import { getNewApplicationScreensOptions } from 'utils/navigation'

import styleConfig from './ReplenishmentScreen.styles'

const ReplenishmentScreen = () => {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()
  const [mood, setMood] = useState('')

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

  const goOrderScreen = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_ORDER)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getNewApplicationScreensOptions(colors),
    })
  }, [colors])

  return (
    <View style={styles.itemContent}>
      <View style={styles.container}>
        <FocusAwareStatusBar backgroundColor={R.colors.blue} />

        <View style={styles.textContent}>
          <Typo.Title type="regular1">
            Вам необходимо внести на свой гарантийный счёт указанную вами сумму
            вознаграждения. В случае выполнения заказа она будете возвращена
            вам. Выберите удобный способ пополнения гарантийного счёта:
          </Typo.Title>
        </View>

        <Typo.TextButton color="textSecondary">
          Способ пополнения счёта
        </Typo.TextButton>

        <View style={styles.checkBoxContent}>
          {data.map(item => (
            <CheckBox
              key={item.id}
              text={item.title}
              onPress={() => setMood(item.title)}
              checkStyle={mood === item.title ? styles.check : {}}
              boxStyle={mood === item.title ? styles.checkBox : {}}
            />
          ))}
        </View>
      </View>
      <CustomButton text={'Продолжить'} onPress={goOrderScreen} />
    </View>
  )
}
export default ReplenishmentScreen
