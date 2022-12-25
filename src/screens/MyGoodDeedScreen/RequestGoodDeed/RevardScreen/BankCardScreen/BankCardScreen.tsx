import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import { Input } from 'components/Input/Input'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { useLayoutEffect } from 'react'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import R from 'res'
import { lang } from 'utils/lang'
import { getDefaultScreenOptions } from 'utils/navigation'

import stylesConfig from './BankCardScreen.style'
const T = R.lang.screen_bankCard

export const BankCardScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getDefaultScreenOptions(colors),
    })
  }, [colors])

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.gray} />

      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Input name={lang(`${T}.inputName`)} container={styles.input} />

          <Input
            name={lang(`${T}.inputLabel`)}
            container={styles.input}
            icon={<R.icons.PolyognIcon />}
          />

          <Input
            name={lang(`${T}.inputTitle`)}
            container={styles.input}
            icon={<R.icons.PolyognIcon />}
          />

          <Typo.TextButton type="regular2" color="textSecondary">
            {lang(`${T}.text`)}
          </Typo.TextButton>
        </View>
        <CustomButton text={lang(`${T}.buttonLabel`)} />
      </View>
    </KeyboardAwareScrollView>
  )
}
