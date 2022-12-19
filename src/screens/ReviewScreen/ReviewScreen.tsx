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
import { getApplicationScreenOptions } from 'utils/navigation'

import stylesConfig from './ReviewScreen.style'

const ReviewScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getApplicationScreenOptions(colors),
    })
  }, [colors])

  return (
    <View style={styles.main}>
      <FocusAwareStatusBar backgroundColor={R.colors.headerRed} />
      <Container>
        <Typo.Body type="small" color="textSecondary">
          Пожалуйста оцените работу исполнителя:
        </Typo.Body>
      </Container>
    </View>
  )
}

export default ReviewScreen
