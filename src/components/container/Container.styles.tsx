import { createStyles } from 'utils/createStyles'

export default createStyles(color => ({
  container: {
    paddingHorizontal: '20@s',
    // marginVertical: '10@vs',
    backgroundColor: color.background,
    flex: 1,
  },
}))
