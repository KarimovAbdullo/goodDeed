import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { ReactNode } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

import stylesConfig from './Input.styles'

interface IProps extends TextInputProps {
  name?: string
  inputStyle?: object
  placeholder?: string
  icon?: ReactNode
  container?: object
  style?: object
}

export const Input = ({
  name = '',
  placeholder,
  icon,
  inputStyle,
  container,
  style,
  ...attributes
}: IProps) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()

  return (
    <View style={[styles.container, style]}>
      {name ? (
        <View style={styles.textContainer}>
          <Typo.TextButton type="regular" color="textSecondary">
            {name}
          </Typo.TextButton>
        </View>
      ) : null}

      <View style={[styles.inputContent, container]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          style={[styles.input, inputStyle]}
          {...attributes}
        />
        {icon}
      </View>
    </View>
  )
}
