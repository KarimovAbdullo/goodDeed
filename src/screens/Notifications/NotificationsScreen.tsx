import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import I18n from 'i18n-js'
import React from 'react'
import { useLayoutEffect } from 'react'
import { View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'
import { getDefaultScreenOptions } from 'utils/navigation'

import stylesConfig from './NotificationsScreen.styles'

const T = R.lang.screen_notification

export const NotificationsScreen = () => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()
  const navigation = useSmartNavigation()
  I18n.locale = 'en'

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getDefaultScreenOptions(colors),
    })
  }, [colors])

  return (
    <View style={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.gray} />

      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <Typo.TextButton center type="regular1" color="textSecondary">
            4 сентября 2021г.
          </Typo.TextButton>
        </View>

        <View style={styles.itemContainer}>
          <Typo.TextButton type="regular1" color="orange">
            {lang(`${T}.msg`)}
          </Typo.TextButton>

          <Typo.Body type="regular14" color="textPrimary">
            {lang(`${T}.title`)}
          </Typo.Body>
        </View>

        <View style={styles.dataContainer}>
          <Typo.TextButton center type="regular1" color="textSecondary">
            24 сентября 2021г.
          </Typo.TextButton>
        </View>

        <View style={styles.itemContainer}>
          <Typo.TextButton type="regular1" color="orange">
            {lang(`${T}.msg`)}
          </Typo.TextButton>

          <Typo.Body type="regular14" color="textPrimary">
            {lang(`${T}.title`)}
          </Typo.Body>
        </View>
      </View>
    </View>
  )
}
