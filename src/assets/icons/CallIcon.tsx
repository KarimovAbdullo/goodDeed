import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
  bg?: ColorValue
}
const CallIcon = (props: IProps) => {
  const { size = 25 } = props

  return (
    <Svg width={s(size)} height={25} fill="none" {...props}>
      <Path
        d="M12.5 0C5.596 0 0 5.596 0 12.5S5.596 25 12.5 25 25 19.404 25 12.5 19.404 0 12.5 0ZM8.008 4.965c.257-.015.49.139.667.412l1.709 3.241a.94.94 0 0 1-.191 1.07l-.783.783a.383.383 0 0 0-.08.222c.3 1.162 1.21 2.234 2.013 2.971.804.737 1.667 1.735 2.788 1.972.139.038.308.052.408-.04l.909-.926c.314-.238.768-.353 1.103-.159h.016l3.083 1.82c.453.284.5.833.176 1.166l-2.124 2.108c-.314.321-.73.43-1.136.43-1.79-.054-3.482-.933-4.872-1.836-2.28-1.66-4.373-3.718-5.687-6.204-.503-1.043-1.095-2.373-1.039-3.537.005-.438.124-.867.432-1.149l2.124-2.124c.166-.14.33-.21.484-.22Z"
        fill="#13172B"
      />
    </Svg>
  )
}

export default CallIcon
