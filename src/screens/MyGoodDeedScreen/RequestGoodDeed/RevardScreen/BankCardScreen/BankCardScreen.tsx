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
import { getDefaultScreenOptions } from 'utils/navigation'

import stylesConfig from './BankCardScreen.style'

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
          <Input name="Номер карты *" container={styles.input} />

          <Input
            name="Месяц"
            container={styles.input}
            icon={<R.icons.PolyognIcon />}
          />

          <Input
            name="Год *"
            container={styles.input}
            icon={<R.icons.PolyognIcon />}
          />

          <Input name="CVV/CVC" container={styles.input} />

          <Typo.TextButton type="regular2" color="textSecondary">
            Настоящее приложение поддерживает 256-битное шифрование.
            Конфидециальность сообщаемой персональной информации обеспечивает
            ПАО “Сбербанк Росии”. Введеная информация не будет предоставлена
            третим лицам за исключением случаев, предусмотренных
            законодательством РФ. Проведение платежей по банковским картам
            осуществляется в строгом соотвествии с требованиями платежных систем
            Visa Int. и MasterCard Europe Sprl.
          </Typo.TextButton>
        </View>
        <CustomButton text={'Получить'} />
      </View>
    </KeyboardAwareScrollView>
  )
}
