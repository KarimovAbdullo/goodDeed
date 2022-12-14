import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
  bg?: ColorValue
}
const BellIcon = (props: IProps) => {
  const { color = '#FFF1CE', size = 20 } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 16 20" fill="none">
      <Path
        d="M8 20C9.1 20 10 19.1 10 18H6C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20ZM14 14V9C14 5.93 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.63 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14Z"
        fill={color}
      />
    </Svg>
  )
}

export default BellIcon
