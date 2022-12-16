import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { useLayoutEffect } from 'react'
import { StatusBar, View } from 'react-native'
import R from 'res'
import { getDefaultScreenOptions } from 'utils/navigation'

import stylesConfig from './NotificationsScreen.styles'

export const NotificationsScreen = () => {
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
      <StatusBar backgroundColor={R.colors.gray} />

      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <Typo.TextButton center type="regular1" color="textSecondary">
            4 сентября 2021г.
          </Typo.TextButton>
        </View>

        <View style={styles.itemContainer}>
          <Typo.TextButton type="regular1" color="orange">
            Новое сообщение
          </Typo.TextButton>

          <Typo.Body type="regular14" color="textPrimary">
            Поступило новое сообщение по заявке №345445
          </Typo.Body>
        </View>

        <View style={styles.dataContainer}>
          <Typo.TextButton center type="regular1" color="textSecondary">
            24 сентября 2021г.
          </Typo.TextButton>
        </View>

        <View style={styles.itemContainer}>
          <Typo.TextButton type="regular1" color="orange">
            Новое сообщение
          </Typo.TextButton>

          <Typo.Body type="regular14" color="textPrimary">
            Поступило новое сообщение по заявке №345445
          </Typo.Body>
        </View>
      </View>
    </View>
  )
}
