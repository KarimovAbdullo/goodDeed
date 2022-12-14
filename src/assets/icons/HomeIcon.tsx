import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Defs, Path, Stop } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
  bg?: ColorValue
}

const HomeIcon = (props: IProps) => {
  const { size = 25 } = props

  return (
    <Svg width={s(size)} height="26" viewBox="0 0 25 26" fill="none">
      <Path
        d="M13.9313 1.38235C13.5444 1.04507 13.0323 0.857147 12.5 0.857147C11.9677 0.857147 11.4556 1.04507 11.0688 1.38235L0.977085 10.1785C0.668088 10.4482 0.422046 10.7732 0.254035 11.1337C0.0860231 11.4941 -0.000419942 11.8824 1.53386e-06 12.2748V22.977C0.000553828 23.741 0.330038 24.4736 0.916029 25.0137C1.50202 25.5538 2.29656 25.8571 3.125 25.8571H6.25C7.0788 25.8571 7.87366 25.5535 8.45971 25.013C9.04576 24.4725 9.375 23.7394 9.375 22.975V18.1715C9.375 17.9168 9.48475 17.6724 9.6801 17.4922C9.87545 17.3121 10.1404 17.2108 10.4167 17.2108H14.5833C14.8596 17.2108 15.1246 17.3121 15.3199 17.4922C15.5153 17.6724 15.625 17.9168 15.625 18.1715V22.975C15.625 23.7394 15.9542 24.4725 16.5403 25.013C17.1263 25.5535 17.9212 25.8571 18.75 25.8571H21.875C22.7038 25.8571 23.4987 25.5535 24.0847 25.013C24.6708 24.4725 25 23.7394 25 22.975V12.2728C24.9999 11.8807 24.913 11.4927 24.7446 11.1326C24.5762 10.7724 24.33 10.4478 24.0208 10.1785L13.9313 1.3785V1.38235Z"
        fill="url(#paint0_linear_22_182)"
      />

      <Defs>
        <linearGradient
          id="paint0_linear_22_182"
          x1="12.5"
          y1="0.857147"
          x2="12.5"
          y2="25.8571"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#FFC24D" />

          <Stop offset="1" stop-color="#FF9921" />
        </linearGradient>
      </Defs>
    </Svg>
  )
}

export default HomeIcon
