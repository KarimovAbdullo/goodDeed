import CheckBox from 'components/CheckBox/ CheckBox'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import { useLayoutEffect } from 'react'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { getNewApplicationScreensOptions } from 'utils/navigation'

import styleConfig from './NewApplicationScreen.styles'

const NewApplicationScreen = () => {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()

  const data = [
    {
      title: 'Да',
      id: '1',
    },
    {
      title: 'Нет',
      id: '2',
    },
  ]

  const onRepleshiment = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_REPLENISHMENT)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getNewApplicationScreensOptions(colors),
    })
  }, [colors])

  return (
    <View style={styles.itemContent}>
      <View style={styles.container}>
        <FocusAwareStatusBar backgroundColor={R.colors.blue} />

        <Typo.TextButton color="textSecondary">
          Опишите в какой услуге Вы нуждаетесь
        </Typo.TextButton>

        <View style={styles.textContent}>
          <Typo.Title type="regular">
            Нужно сделать фото автомобиля BMW X5 г/н у167св 199 RUS который
            стоит на площадке г. Москва ул. Трудовая 7
          </Typo.Title>
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
          Вы хотите услугу на безвозмезной основе?
        </Typo.TextButton>

        <View style={styles.checkBoxContent}>
          {data.map(item => (
            <CheckBox key={item.id} text={item.title} />
          ))}
        </View>

        <Typo.TextButton color="textSecondary">
          Тип исполнителей
        </Typo.TextButton>

        <View style={styles.checkBoxContent}>
          {data.map(item => (
            <CheckBox key={item.id} text={item.title} />
          ))}
        </View>

        <Typo.TextButton color="textSecondary">
          Укажите сумму оплаты за услугу
        </Typo.TextButton>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>1 300</Text>
        </TouchableOpacity>
      </View>
      <CustomButton text={'Опубликовать'} onPress={onRepleshiment} />
    </View>
  )
}
export default NewApplicationScreen
