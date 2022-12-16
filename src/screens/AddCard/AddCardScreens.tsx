// import Typo from 'components/typo'
// import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import { CustomHeader } from 'components/CustomHeader/CustomHeader'
import { Input } from 'components/Input/Input'
import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import R from 'res'

import stylesConfig from './AddCardScreen.styles'

export const AddCardScreen = () => {
  const styles = useStyles(stylesConfig)

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.itemContent}>
      <StatusBar backgroundColor={R.colors.white} />
      <CustomHeader text={'Добавление карты'} bgColor={'red'} />
      {/* <Container> */}
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
        <CustomButton text={'Сохранить'} />
      </View>
      {/* </Container> */}
    </KeyboardAwareScrollView>
  )
}
