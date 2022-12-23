import Typo from 'components/typo'
// import { s, vs } from 'react-native-size-matters'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

import styleConfig from './ButtonRadio.style'
const ButtonRadio = () => {
  const styles = useStyles(styleConfig)
  const [mood, setMood] = useState('')
  const data = ['yandex', 'Qiwi', 'Karta']
  return (
    <View>
      {data.map(item => (
        <View key={item} style={styles.container}>
          <TouchableOpacity
            style={styles.checkContent}
            onPress={() => setMood(item)}>
            {mood === item && <View style={styles.check} />}
          </TouchableOpacity>
          <Typo.Body type="regular16">{item}</Typo.Body>
        </View>
      ))}
    </View>
  )
}

// const styles = StyleSheet.create({
//   outter: {
//     width: 22,
//     height: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 999,
//     borderWidth: 1,
//     borderColor: 'green',
//     marginRight: 10,
//   },
//   text: {
//     fontSize: s(20),
//     fontWeight: '700',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inner: {
//     width: s(15),
//     height: vs(15),
//     backgroundColor: 'gray',
//     borderRadius: s(10),
//   },
//   mood: {
//     marginHorizontal: s(15),
//     borderWidth: 1,
//     flexDirection: 'row',
//   },
//   wrapper: {
//     // flexDirection: 'column',
//     justifyContent: 'space-evenly',
//   },
// })

export default ButtonRadio
