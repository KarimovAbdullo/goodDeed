import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from 'res'

interface IProps {
  text: string | string[]
  onPress?: (() => void) | undefined
  name: string | string[]
}

import stylesConfig from './ButtonNavigate.styles'

export const ButtonNavigate = ({ text, onPress, name }: IProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <TouchableOpacity style={styles.textContainer} onPress={onPress}>
      <View>
        <Typo.Body type="fill" color="textSecondary">
          {name}
        </Typo.Body>

        <Typo.TextButton color="orange" type="regular1">
          {text}
        </Typo.TextButton>
      </View>

      <TouchableOpacity>
        <R.icons.LineBackIcon />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
