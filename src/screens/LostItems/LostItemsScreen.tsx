import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate'
import Hr from 'components/Hr'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { useLayoutEffect } from 'react'
import { StatusBar, View } from 'react-native'
import R from 'res'
import { getDefaultScreenOptions } from 'utils/navigation'

import stylesConfig from './LostItemsScreen.styles'

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
      <StatusBar backgroundColor={R.colors.gray} />

      <View style={styles.container}>
        <Hr style={styles.hr} />

        <ButtonNavigate text={'Найдено'} name={'Сделать фото машины'} />

        <Hr style={styles.lineHr} />

        <ButtonNavigate text={'Найдено'} name={'Сделать фото машины'} />

        <Hr style={styles.lineHr} />
      </View>
    </View>
  )
}