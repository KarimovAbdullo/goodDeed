import CheckBox from 'components/CheckBox/ CheckBox'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import I18n from 'i18n-js'
import { useLayoutEffect } from 'react'
import React, { useState } from 'react'
import { View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'
import { getNewApplicationScreensOptions } from 'utils/navigation'

import styleConfig from './ReplenishmentScreen.styles'

const T = R.lang.screen_replenishment

const ReplenishmentScreen = () => {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()
  const [mood, setMood] = useState('')

  console.log(lang(`${T}.home`))
  I18n.locale = 'en'
  console.log(lang(`${T}.home`))

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
          <Typo.Title type="regular1">{lang(`${T}.text`)}</Typo.Title>
        </View>

        <Typo.TextButton color="textSecondary">
          {lang(`${T}.title`)}
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
      <CustomButton text={lang(`${T}.buttonText`)} onPress={goOrderScreen} />
    </View>
  )
}
export default ReplenishmentScreen
