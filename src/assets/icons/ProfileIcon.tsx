import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
}

const ProfileIcon = (props: IProps) => {
  const { size = 22, color = '#FFC24D' } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 25 26" fill="none">
      <Path
        d="M12.5 0.857147C5.6 0.857147 0 6.45715 0 13.3571C0 20.2571 5.6 25.8571 12.5 25.8571C19.4 25.8571 25 20.2571 25 13.3571C25 6.45715 19.4 0.857147 12.5 0.857147ZM12.5 4.60715C14.575 4.60715 16.25 6.28215 16.25 8.35715C16.25 10.4321 14.575 12.1071 12.5 12.1071C10.425 12.1071 8.75 10.4321 8.75 8.35715C8.75 6.28215 10.425 4.60715 12.5 4.60715ZM12.5 22.3571C11.0148 22.3572 9.55273 21.9896 8.2441 21.2873C6.93547 20.585 5.82097 19.5698 5 18.3321C5.0375 15.8446 10 14.4821 12.5 14.4821C14.9875 14.4821 19.9625 15.8446 20 18.3321C19.179 19.5698 18.0645 20.585 16.7559 21.2873C15.4473 21.9896 13.9852 22.3572 12.5 22.3571Z"
        fill={color}
      />
    </Svg>
  )
}

export default ProfileIcon
