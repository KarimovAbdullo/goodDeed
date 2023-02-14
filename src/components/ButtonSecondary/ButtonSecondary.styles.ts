import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  button: {
    height: '60@vs',
    borderRadius: '60@s',
    justifyContent: 'center',
    marginBottom: '10@vs',
    alignItems: 'center',
    borderWidth: '1@s',
    borderColor: colors.orange,
    backgroundColor: colors.buttonSecondary,
  },
  text: {
    fontSize: '16@s',
    textAlign: 'center',
    color: colors.textPrimary,
  },
}))
