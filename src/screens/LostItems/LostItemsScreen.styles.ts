import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    flex: '1@s',
    flexDirection: 'column',
  },
  hr: {
    height: '1@vs',
    backgroundColor: colors.gray,
    marginTop: '20@vs',
  },
  itemContent: {
    flex: '1@s',
    paddingHorizontal: '20@s',
  },
  lineHr: {
    height: '1@vs',
    backgroundColor: colors.gray,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
}))
