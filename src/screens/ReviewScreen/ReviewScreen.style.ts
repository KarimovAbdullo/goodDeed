import R from 'res'
import { createStyles } from 'utils/createStyles'
export default createStyles(colors => ({
  topTitle: {
    marginTop: '20@vs',
  },
  iconCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginVertical: '15@vs',
  },
  title: {
    marginTop: '5@vs',
    marginBottom: '10@vs',
  },
  multiLine: {
    height: '181@vs',
    textAlignVertical: 'top',
    borderRadius: '10@vs',
    backgroundColor: colors.gray,
    padding: '13@s',
    fontSize: '18@ms',
    fontFamly: R.fonts.Montserrat.bold,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
}))
