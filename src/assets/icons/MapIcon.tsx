import * as React from 'react'
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from 'react-native-svg'

const MapIcon = (props: SvgProps) => (
  <Svg width={42} height={65} fill="none" {...props}>
    <Path
      d="M42 20.842C42 32.353 21 65 21 65S0 32.353 0 20.842C0 9.332 9.402 0 21 0s21 9.331 21 20.842Z"
      fill="url(#a)"
    />
    <Circle cx={21} cy={21} r={16} fill="#fff" />
    <Path
      d="M29.063 29a11.293 11.293 0 0 0 0-16c-4.43-4.418-11.612-4.418-16.042 0a11.293 11.293 0 0 0 0 16c4.43 4.418 11.612 4.418 16.042 0Z"
      fill="url(#b)"
    />
    <Path
      d="M25.132 13.974a4.723 4.723 0 0 0-4.044 2.282 4.694 4.694 0 0 0 .712 5.753 4.722 4.722 0 0 0 7.688-1.533A4.693 4.693 0 0 0 28 14.946a4.724 4.724 0 0 0-2.87-.972h.002Zm0 7.491a2.8 2.8 0 0 1-2.583-1.721 2.78 2.78 0 0 1 .606-3.038 2.798 2.798 0 0 1 4.772 1.971c0 .74-.295 1.448-.82 1.97a2.801 2.801 0 0 1-1.975.818Z"
      fill="#FEFEFE"
    />
    <Path
      d="m21.043 21.022-.051.083.05-.083a4.646 4.646 0 0 1-.552-1.513h-.012.012a4.694 4.694 0 0 1 .553-3.176 4.712 4.712 0 0 0-2.163-1.95 4.727 4.727 0 0 0-5.426 1.139 4.698 4.698 0 0 0 1.573 7.448 4.728 4.728 0 0 0 5.588-1.33c-.051.065-.106.126-.163.19a5.506 5.506 0 0 1-1.917 3.064 5.531 5.531 0 0 1-3.408 1.221h-.099a.963.963 0 0 0-.912.93.956.956 0 0 0 .857.98.963.963 0 0 0 .516-.09.96.96 0 0 1-.41.091 7.446 7.446 0 0 0 4.565-1.566 7.413 7.413 0 0 0 2.638-4.033 4.732 4.732 0 0 1-1.24-1.405Zm-4.085.444a2.801 2.801 0 0 1-2.583-1.722 2.782 2.782 0 0 1 .606-3.038 2.798 2.798 0 0 1 4.772 1.972c0 .739-.295 1.448-.819 1.97a2.802 2.802 0 0 1-1.976.818Zm3.577-.082Zm.045-.46Zm-4.705 6.681Zm-.581-1.468a.766.766 0 0 1 0-.003v.003Zm.228.083a1.741 1.741 0 0 1 0-.002v.002Z"
      fill="#3D3D3D"
    />
    <Path
      d="M15.7 18.755c.557 0 1.009-.45 1.009-1.006 0-.555-.452-1.005-1.009-1.005-.557 0-1.008.45-1.008 1.005 0 .556.451 1.006 1.008 1.006Z"
      fill="#FEFEFE"
    />
    <Path
      d="M24.24 18.755c.558 0 1.01-.45 1.01-1.006 0-.555-.452-1.005-1.01-1.005-.556 0-1.008.45-1.008 1.005 0 .556.452 1.006 1.009 1.006Z"
      fill="url(#c)"
    />
    <Path
      d="M12.868 19.266a4.687 4.687 0 0 1 2.67-4.234 4.718 4.718 0 0 1 4.982.57 4.713 4.713 0 0 0-3.464-1.639 4.727 4.727 0 0 0-3.539 1.47 4.702 4.702 0 0 0-1.274 3.606 4.694 4.694 0 0 0 1.832 3.359 4.664 4.664 0 0 1-1.207-3.132Z"
      fill="#545454"
    />
    <Path
      d="m22.12 22.296-.035-.03a3.712 3.712 0 0 1-.15-.132l-.035-.032-.118-.115-.037-.038a2.56 2.56 0 0 1-.127-.139l-.044-.05a4.696 4.696 0 0 1-.528-5.426 4.599 4.599 0 0 0-.3-.456c-.027.041-.054.083-.08.126-.024.043-.035.058-.051.088a5.179 5.179 0 0 0 .001 5.177l.075.126a2.902 2.902 0 0 1 .217 2.672 6.645 6.645 0 0 1-2.043 2.618 6.67 6.67 0 0 1-3.057 1.307 7.446 7.446 0 0 0 4.122-1.76 7.413 7.413 0 0 0 2.358-3.803 3.193 3.193 0 0 1-.168-.133Zm-1.643-2.783Z"
      fill="#212121"
    />
    <Path
      d="M27.194 14.45a4.693 4.693 0 0 1 1.153 6.204 4.715 4.715 0 0 1-2.695 2.05 4.728 4.728 0 0 1-3.378-.282l.013.01a4.722 4.722 0 0 0 5.525.125 4.708 4.708 0 0 0 1.999-3.251 4.69 4.69 0 0 0-1.074-3.66 4.715 4.715 0 0 0-1.543-1.195Z"
      fill="#DBDBDB"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={21}
        y1={0}
        x2={21}
        y2={65}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFC24D" />
        <Stop offset={1} stopColor="#FF9921" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={13.021}
        y1={13}
        x2={29.021}
        y2={29.042}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFC24D" />
        <Stop offset={1} stopColor="#FF9921" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={24.241}
        y1={16.744}
        x2={24.241}
        y2={18.755}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFC24D" />
        <Stop offset={1} stopColor="#FF9921" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default MapIcon
