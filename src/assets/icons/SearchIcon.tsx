import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
  stopColor?: ColorValue
}

const SearchIcon = (props: IProps) => {
  const { size = 65, color = 'white', stopColor = '#FFC24D' } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 65 65" fill="none">
      <Rect width="65" height="65" rx="20" fill={color} />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38.4063 36.6238L45.1313 43.3488C45.3676 43.5853 45.5004 43.9061 45.5002 44.2405C45.5001 44.5749 45.3672 44.8955 45.1306 45.1319C44.8941 45.3683 44.5733 45.501 44.2389 45.5009C43.9045 45.5008 43.5839 45.3678 43.3475 45.1313L36.6225 38.4063C34.6122 39.9634 32.0841 40.6961 29.5527 40.4555C27.0212 40.2148 24.6766 39.0188 22.9956 37.1108C21.3147 35.2028 20.4238 32.7261 20.5041 30.1845C20.5844 27.6429 21.63 25.2274 23.428 23.4293C25.2261 21.6312 27.6416 20.5857 30.1832 20.5054C32.7248 20.425 35.2015 21.316 37.1095 22.9969C39.0175 24.6778 40.2135 27.0225 40.4542 29.554C40.6949 32.0854 39.9621 34.6134 38.405 36.6238H38.4063ZM30.5 38C32.4891 38 34.3968 37.2099 35.8033 35.8033C37.2098 34.3968 38 32.4892 38 30.5C38 28.5109 37.2098 26.6033 35.8033 25.1967C34.3968 23.7902 32.4891 23 30.5 23C28.5109 23 26.6032 23.7902 25.1967 25.1967C23.7902 26.6033 23 28.5109 23 30.5C23 32.4892 23.7902 34.3968 25.1967 35.8033C26.6032 37.2099 28.5109 38 30.5 38Z"
        fill={stopColor}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_103_1456"
          x1="32.9997"
          y1="20.5004"
          x2="32.9997"
          y2="45.5009"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color={stopColor} />
          <Stop offset="1" stop-color={stopColor} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SearchIcon
