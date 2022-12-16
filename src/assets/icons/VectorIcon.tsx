import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
  stopColor?: ColorValue
}

const VectorIcon = (props: IProps) => {
  const { size = 14, color = '#FFC24D', stopColor = '#FF9921' } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 14 14" fill="none">
      <Path
        d="M7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM6.125 5.6875C6.125 6.412 5.733 7 5.25 7C4.767 7 4.375 6.412 4.375 5.6875C4.375 4.963 4.767 4.375 5.25 4.375C5.733 4.375 6.125 4.963 6.125 5.6875ZM3.74937 8.37113C3.84986 8.31311 3.96927 8.29739 4.08135 8.32742C4.19342 8.35745 4.28898 8.43077 4.347 8.53125C4.61572 8.99705 5.00242 9.38382 5.46816 9.65264C5.9339 9.92145 6.46225 10.0628 7 10.0625C7.53775 10.0628 8.0661 9.92145 8.53184 9.65264C8.99758 9.38382 9.38428 8.99705 9.653 8.53125C9.68152 8.48109 9.71967 8.43707 9.76527 8.40172C9.81087 8.36637 9.86302 8.34039 9.9187 8.32527C9.97438 8.31015 10.0325 8.3062 10.0897 8.31364C10.1469 8.32107 10.2021 8.33975 10.2521 8.3686C10.302 8.39745 10.3458 8.4359 10.3809 8.48173C10.4159 8.52757 10.4415 8.57988 10.4563 8.63566C10.471 8.69144 10.4746 8.74959 10.4668 8.80675C10.459 8.86392 10.4399 8.91897 10.4107 8.96875C10.0652 9.56756 9.56808 10.0648 8.96933 10.4104C8.37057 10.756 7.69134 10.9378 7 10.9375C6.30866 10.9378 5.62943 10.756 5.03067 10.4104C4.43192 10.0648 3.93477 9.56756 3.58925 8.96875C3.53124 8.86827 3.51552 8.74885 3.54554 8.63678C3.57557 8.5247 3.64889 8.42914 3.74937 8.37113ZM8.75 7C8.267 7 7.875 6.412 7.875 5.6875C7.875 4.963 8.267 4.375 8.75 4.375C9.233 4.375 9.625 4.963 9.625 5.6875C9.625 6.412 9.233 7 8.75 7Z"
        fill={color}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_153_844"
          x1="7"
          y1="0"
          x2="7"
          y2="14"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color={color} />
          <Stop offset="1" stop-color={stopColor} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default VectorIcon