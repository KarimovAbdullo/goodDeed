import React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'

const SendIcon = () => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Path
        d="M20 0C22.6264 0 25.2272 0.517315 27.6537 1.52241C30.0802 2.5275 32.285 4.00069 34.1421 5.85786C35.9993 7.71504 37.4725 9.91982 38.4776 12.3463C39.4827 14.7728 40 17.3736 40 20C40 25.3043 37.8929 30.3914 34.1421 34.1421C30.3914 37.8929 25.3043 40 20 40C17.3736 40 14.7728 39.4827 12.3463 38.4776C9.91982 37.4725 7.71504 35.9993 5.85786 34.1421C2.10714 30.3914 0 25.3043 0 20C0 14.6957 2.10714 9.60859 5.85786 5.85786C9.60859 2.10714 14.6957 0 20 0V0ZM12 11.42V18.1L26.28 20L12 21.9V28.58L32 20L12 11.42Z"
        fill="url(#paint0_linear_245_1291)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_245_1291"
          x1="20"
          y1="0"
          x2="20"
          y2="40"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#FFC24D" />
          <Stop offset="1" stop-color="#FF9921" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SendIcon
