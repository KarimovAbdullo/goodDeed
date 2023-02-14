import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
  stopColor?: ColorValue
}

const LocatsiyaIcon = (props: IProps) => {
  const { size = 65, color = 'white', stopColor = '#FFC24D' } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 65 65" fill="none">
      <Rect width="65" height="65" rx="20" fill={color} />
      <Path
        d="M44.25 30.5C44.25 39.25 33 46.75 33 46.75C33 46.75 21.75 39.25 21.75 30.5C21.75 27.5163 22.9353 24.6548 25.045 22.545C27.1548 20.4353 30.0163 19.25 33 19.25C35.9837 19.25 38.8452 20.4353 40.955 22.545C43.0647 24.6548 44.25 27.5163 44.25 30.5Z"
        stroke={stopColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M33 34.25C35.0711 34.25 36.75 32.5711 36.75 30.5C36.75 28.4289 35.0711 26.75 33 26.75C30.9289 26.75 29.25 28.4289 29.25 30.5C29.25 32.5711 30.9289 34.25 33 34.25Z"
        stroke={stopColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_103_1457"
          x1="33"
          y1="19.25"
          x2="33"
          y2="46.75"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#FFC24D" />
          <Stop offset="1" stop-color="#FF9921" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_103_1457"
          x1="33"
          y1="26.75"
          x2="33"
          y2="34.25"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#FFC24D" />
          <Stop offset="1" stop-color="#FF9921" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default LocatsiyaIcon
