import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

interface IProps {
  text: string | string[]
  onPress?: (() => void) | undefined
  boxStyle?: object
  checkStyle?: object
  image?: string
}

import stylesConfig from './CheckBox.styles'

export default function CheckBox({
  text,
  onPress,
  boxStyle,
  checkStyle,
  image,
}: IProps) {
  const styles = useStyles(stylesConfig)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkContent, boxStyle]}
        onPress={onPress}>
        <View style={[styles.check, checkStyle]} />
      </TouchableOpacity>

      <Typo.Body type="fill" color="textPrimary">
        {text}
      </Typo.Body>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  )
}
