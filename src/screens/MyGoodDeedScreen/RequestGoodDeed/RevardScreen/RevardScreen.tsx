import CheckBox from 'components/CheckBox/ CheckBox'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { useLayoutEffect } from 'react'
import { View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'
import { getDefaultScreenOptions } from 'utils/navigation'

import styleConfig from './RevardScreen.style'

const T = R.lang.screen_revard

const RevardScreen = () => {
  const styles = useStyles(styleConfig)
  const colors = useColors()
  const navigation = useSmartNavigation()
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
      title: 'Pay',
      id: '2',
    },
    {
      title: ' G Pay',
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
          {lang(`${T}.title`)}
        </Typo.Body>

        <Typo.Body type="small" color="textSecondary">
          {lang(`${T}.subTitle`)}
        </Typo.Body>

        <Typo.Body type="fill" color="textPrimary" style={styles.price}>
          5 евро
        </Typo.Body>
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
        <View style={styles.btnCard} />
      </View>
      <View style={styles.btn}>
        <CustomButton text={lang(`${T}.button`)} onPress={GoBankCard} />
      </View>
    </Container>
  )
}

export default RevardScreen
