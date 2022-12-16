import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  heigth?: number
  width?: number
  color?: ColorValue
}

const PolyognIcon = (props: IProps) => {
  const { width = 10, color = '#C4C4C4', heigth = 8 } = props

  return (
    <Svg width={s(width)} height={s(heigth)} viewBox="0 0 10 8" fill="none">
      <Path d="M5 8L0.669873 0.499999L9.33013 0.5L5 8Z" fill={color} />
    </Svg>
  )
}

export default PolyognIcon
