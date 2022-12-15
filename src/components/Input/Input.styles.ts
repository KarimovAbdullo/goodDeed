import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    marginVertical: '5@vs',
  },
  textContainer: {
    paddingLeft: '10@s',
    marginBottom: '5@s',
  },
  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray,
    borderRadius: '60@s',
    paddingHorizontal: '15@s',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: '14@s',
    paddingLeft: '10@s',
    marginVertical: '2@s',
    paddingStart: '20@s',
    width: '85%',
    height: '45@vs',
    color: colors.black,
  },
}))
