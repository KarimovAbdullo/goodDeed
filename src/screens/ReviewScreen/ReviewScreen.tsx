import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { useLayoutEffect } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { s } from 'react-native-size-matters'
import R from 'res'
import { lang } from 'utils/lang'
import { getApplicationScreenOptions } from 'utils/navigation'

import stylesConfig from './ReviewScreen.style'

const T = R.lang.screen_review

const ReviewScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()
  const colors = useColors()
  // const [press, setPress] = useState(false)
  const [maxRating] = useState([1, 2, 3, 4, 5])
  const [icon, setIcon] = useState(1)
  const [text, setText] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getApplicationScreenOptions(colors),
    })
  }, [colors])
  const press = () => {
    setText('')
  }

  const CustomRatingBar = () => {
    return (
      <View style={styles.iconCard}>
        {maxRating.map(item => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setIcon(item)}>
              {item <= icon ? (
                <R.icons.VectorIcon size={s(26)} />
              ) : (
                <R.icons.SmileIcon size={s(26)} />
              )}
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  return (
    <Container>
      <FocusAwareStatusBar backgroundColor={R.colors.headerRed} />

      <Typo.Body type="small" color="textSecondary" style={styles.topTitle}>
        {lang(`${T}.topTitle`)}
      </Typo.Body>

      <CustomRatingBar />

      <Typo.Body type="small" color="textSecondary" style={styles.title}>
        {lang(`${T}.midTitle`)}
      </Typo.Body>

      <TextInput
        multiline={true}
        value={text}
        style={styles.multiLine}
        onChangeText={e => {
          setText(e)
        }}
        autoCapitalize="words"
      />
      <View style={styles.btn}>
        <CustomButton text={lang(`${T}.btn`)} onPress={press} />
      </View>
    </Container>
  )
}
export default ReviewScreen
