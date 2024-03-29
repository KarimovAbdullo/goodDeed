import { createStyles } from 'utils/createStyles'
export default createStyles(colors => ({
  container: {
    flex: '1@s',
  },
  titleContent: {
    // marginTop: '10@s',
  },
  textContent: {
    padding: '13@s',
    backgroundColor: colors.gray,
    borderRadius: '10@s',
    marginBottom: '10@vs',
  },

  checkBoxContent: {
    flexDirection: 'column',
    marginVertical: '5@s',
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: '10@vs',
    paddingHorizontal: '20@s',
  },
  button: {
    padding: '10@s',
    backgroundColor: colors.gray,
    width: '150@s',
    borderRadius: '20@s',
    justifyContent: 'center',
    marginTop: '10@vs',
  },
  textButton: {
    textAlign: 'center',
    color: colors.black,
    fontSize: '16@ms',
    fontWeight: '300',
  },
  check: {
    width: '15@s',
    height: '15@s',
    backgroundColor: colors.linearEnd,
    borderRadius: '999@s',
  },
  checkBox: {
    width: '22@s',
    height: '22@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '999@s',
    borderWidth: '1@s',
    borderColor: colors.linearEnd,
    marginRight: '10@s',
  },
}))
