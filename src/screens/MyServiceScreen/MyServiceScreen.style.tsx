import { createStyles } from 'utils/createStyles'
export default createStyles(colors => ({
  main: {
    marginTop: '15@vs',
  },
  hrInlene: {
    height: '1@vs',
    backgroundColor: colors.gray,
  },
  cardBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '30@vs',
  },
}))
