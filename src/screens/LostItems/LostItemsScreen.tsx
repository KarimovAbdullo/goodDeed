import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Hr from 'components/Hr'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { useLayoutEffect } from 'react'
import { View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'
import { getDefaultScreenOptions } from 'utils/navigation'

import stylesConfig from './LostItemsScreen.styles'

const T = R.lang.screen_lostItems

export const LostItemsScreen = () => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()
  const navigation = useSmartNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getDefaultScreenOptions(colors),
    })
  }, [colors])

  return (
    <View style={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.gray} />

      <View style={styles.container}>
        <Hr style={styles.hr} />

        <ButtonNavigate
          text={lang(`${T}.subTitle`)}
          name={lang(`${T}.titles`)}
        />

        <Hr style={styles.lineHr} />

        <ButtonNavigate
          text={lang(`${T}.subTitle`)}
          name={lang(`${T}.titles`)}
        />

        <Hr style={styles.lineHr} />
      </View>
      <View style={styles.btn}>
        <CustomButton text={lang(`${T}.button`)} />
      </View>
    </View>
  )
}
