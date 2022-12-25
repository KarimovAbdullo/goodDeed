import CheckBox from 'components/CheckBox/ CheckBox'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import I18n from 'i18n-js'
import { useLayoutEffect } from 'react'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'
import { getNewApplicationScreensOptions } from 'utils/navigation'

const T = R.lang.screen_newApplication

import styleConfig from './NewApplicationScreen.styles'

const NewApplicationScreen = () => {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()
  const [active, setActive] = React.useState(false)
  const [actived, setActived] = React.useState(false)

  console.log(lang(`${T}.home`))
  I18n.locale = 'en'
  console.log(lang(`${T}.home`))

  const onRepleshiment = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_REPLENISHMENT)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getNewApplicationScreensOptions(colors),
    })
  }, [colors])

  const onPress = () => {
    setActive(!active)
  }

  const onActived = () => {
    setActived(!actived)
  }

  return (
    <View style={styles.itemContent}>
      <View style={styles.container}>
        <FocusAwareStatusBar backgroundColor={R.colors.blue} />

        <Typo.TextButton color="textSecondary">
          {lang(`${T}.titleTop`)}
        </Typo.TextButton>

        <View style={styles.textContent}>
          <Typo.Title type="regular">{lang(`${T}.label`)}</Typo.Title>
        </View>

        <View style={styles.imageContent}>
          <View style={styles.addImageContainer}>
            <Image
              source={require('../../assets/images/1.png')}
              style={styles.image}
            />
          </View>

          <View style={styles.addImageContainer}>
            <Image
              source={require('../../assets/images/2.png')}
              style={styles.image}
            />
          </View>

          <TouchableOpacity style={styles.addImageContainer}>
            <R.icons.AddFotoIcon />
          </TouchableOpacity>
        </View>

        <Typo.TextButton color="textSecondary">
          {lang(`${T}.subTitle`)}
        </Typo.TextButton>

        <View style={styles.checkContent}>
          <CheckBox
            onPress={onPress}
            text={lang(`${T}.checkTitle`)}
            checkStyle={active ? styles.active : styles.error}
          />

          <CheckBox
            onPress={onPress}
            text={lang(`${T}.checkLabel`)}
            checkStyle={active ? styles.error : styles.active}
          />
        </View>

        <Typo.TextButton color="textSecondary">
          {lang(`${T}.buttonText`)}
        </Typo.TextButton>

        <View style={styles.checkContent}>
          <CheckBox
            onPress={onActived}
            text={lang(`${T}.checkTitle`)}
            checkStyle={actived ? styles.active : styles.error}
          />

          <CheckBox
            onPress={onActived}
            text={lang(`${T}.checkLabel`)}
            checkStyle={actived ? styles.error : styles.active}
          />
        </View>

        <Typo.TextButton color="textSecondary">
          {lang(`${T}.buttonSubText`)}
        </Typo.TextButton>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>1 300</Text>
        </TouchableOpacity>
      </View>
      <CustomButton text={lang(`${T}.button`)} onPress={onRepleshiment} />
    </View>
  )
}
export default NewApplicationScreen
