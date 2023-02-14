import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  button: {
    width: '100%',
    height: '60@vs',
    borderRadius: '60@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10@vs',
  },
  text: {
    fontSize: '16@s',
    textAlign: 'center',
    color: colors.white,
  },
}))
