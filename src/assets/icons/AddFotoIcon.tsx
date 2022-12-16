import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
}

const AddFotoIcon = (props: IProps) => {
  const { size = 26, color = '#E0E0E0' } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 26 26" fill="none">
      <Path
        d="M4.33329 5.41667H18.4166V13H20.5833V5.41667C20.5833 4.22175 19.6115 3.25 18.4166 3.25H4.33329C3.13838 3.25 2.16663 4.22175 2.16663 5.41667V18.4167C2.16663 19.6116 3.13838 20.5833 4.33329 20.5833H13V18.4167H4.33329V5.41667Z"
        fill={color}
      />
      <Path
        d="M8.66663 11.9167L5.41663 16.25H17.3333L13 9.75L9.74996 14.0833L8.66663 11.9167Z"
        fill={color}
      />
      <Path
        d="M20.5833 15.1667H18.4166V18.4167H15.1666V20.5834H18.4166V23.8334H20.5833V20.5834H23.8333V18.4167H20.5833V15.1667Z"
        fill={color}
      />
    </Svg>
  )
}

export default AddFotoIcon
