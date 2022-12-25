import { createStyles } from 'utils/createStyles'

export default createStyles(color => ({
  container: {
    paddingHorizontal: '20@s',
    backgroundColor: color.background,
    flex: 1,
  },
}))
