import { ButtonNavigate } from 'components/ButtonNavigate/ButtonNavigate'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Hr from 'components/Hr'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { useLayoutEffect } from 'react'
import { View } from 'react-native'
import R from 'res'
import { getDefaultScreenOptions } from 'utils/navigation'

import styleConfig from './MyGoodDeedScreen.style'

const MyGoodDeedScreen = () => {
  const styles = useStyles(styleConfig)
  const colors = useColors()
  const navigation = useSmartNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getDefaultScreenOptions(colors),
    })
  }, [colors])

  const MyGoodDeed = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_REQUESTGOODDEED)
  }
  return (
    <Container>
      <View style={styles.main}>
        <FocusAwareStatusBar backgroundColor={R.colors.gray} />

        <Hr style={styles.hrInlene} />

        <ButtonNavigate
          name={'Сделать фото машины'}
          text={'12 откликов'}
          onPress={MyGoodDeed}
        />

        <Hr style={styles.hrInlene} />

        <ButtonNavigate name={'Передать письмо'} text={'Передать письмо'} />

        <Hr style={styles.hrInlene} />
      </View>

      <View style={styles.cardBtn}>
        <CustomButton text={'Добавить новый запрос'} />
      </View>
    </Container>
  )
}

export default MyGoodDeedScreen
