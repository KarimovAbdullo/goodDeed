import { Dimensions } from 'react-native'
import { createStyles } from 'utils/createStyles'
export default createStyles(color => ({
  header: {
    backgroundColor: color.black,
    position: 'absolute',
    top: 0,
    height: '60@vs',
  },
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
}))
