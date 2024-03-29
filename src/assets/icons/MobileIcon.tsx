import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
  bg?: ColorValue
}

const MobileIcon = (props: IProps) => {
  const { size = 20 } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 12 20" fill="none">
      <Path
        d="M10.6667 0H1.33333C0.979711 0 0.640573 0.15051 0.390525 0.418419C0.140476 0.686328 0 1.04969 0 1.42857V18.5714C0 18.9503 0.140476 19.3137 0.390525 19.5816C0.640573 19.8495 0.979711 20 1.33333 20H10.6667C11.0203 20 11.3594 19.8495 11.6095 19.5816C11.8595 19.3137 12 18.9503 12 18.5714V1.42857C12 1.04969 11.8595 0.686328 11.6095 0.418419C11.3594 0.15051 11.0203 0 10.6667 0ZM6.66667 18.5714H5.33333V17.1429H6.66667V18.5714ZM1.33333 15.7143V1.42857H10.6667V15.7143H1.33333Z"
        fill="#4F4F4F"
      />
    </Svg>
  )
}

export default MobileIcon
