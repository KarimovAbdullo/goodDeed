import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { useLayoutEffect } from 'react'
import { View } from 'react-native'
import R from 'res'
import { getFindRoomScreenOptions } from 'utils/navigation'

import styleConfig from './FindRoomScreen.style'

const FindRoomScreen = () => {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()
  useLayoutEffect(() => {
    navigation.setOptions({
      ...getFindRoomScreenOptions(colors),
    })
  }, [colors])
  return (
    <Container>
      <View style={styles.main}>
        <FocusAwareStatusBar backgroundColor={R.colors.greenHeader} />

        <Typo.Body type="small" color="textSecondary" style={styles.topTitle}>
          Выберите свой вариант
        </Typo.Body>
      </View>
    </Container>
  )
}

export default FindRoomScreen
