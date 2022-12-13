import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
  bg?: ColorValue
}

const AcountIcon = (props: IProps) => {
  const { size = 25 } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 20 20" fill="none">
      <Path
        d="M10 1C5.0293 1 1 5.0293 1 10C1 14.9707 5.0293 19 10 19C14.9707 19 19 14.9707 19 10C19 5.0293 14.9707 1 10 1Z"
        stroke="#4F4F4F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.04388 15.7114C3.04388 15.7114 5.04998 13.15 9.99999 13.15C14.95 13.15 16.957 15.7114 16.957 15.7114"
        stroke="#4F4F4F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.99999 9.99998C10.7161 9.99998 11.4028 9.71551 11.9092 9.20916C12.4155 8.70282 12.7 8.01606 12.7 7.29998C12.7 6.58389 12.4155 5.89714 11.9092 5.39079C11.4028 4.88444 10.7161 4.59998 9.99999 4.59998C9.2839 4.59998 8.59715 4.88444 8.0908 5.39079C7.58445 5.89714 7.29999 6.58389 7.29999 7.29998C7.29999 8.01606 7.58445 8.70282 8.0908 9.20916C8.59715 9.71551 9.2839 9.99998 9.99999 9.99998V9.99998Z"
        stroke="#4F4F4F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default AcountIcon
