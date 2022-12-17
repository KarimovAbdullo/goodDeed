import { createStyles } from 'utils/createStyles'
export default createStyles(colors => ({
  main: {
    flex: 1,
    marginVertical: '20@vs',
  },
  date: {
    alignSelf: 'center',
    marginTop: '25@vs',
    marginBottom: '15@vs',
  },
  chat: {
    flexDirection: 'row',
  },
  img: {
    width: '38@s',
    height: '38@s',
  },
  user: {
    top: 0,
    marginBottom: '5@vs',
  },
  text: {
    backgroundColor: colors.gray,
    borderRadius: '10@s',
    // width: '50%',

    marginHorizontal: '7@s',
    paddingTop: '5@vs',
    paddingHorizontal: '10@s',
  },
  task: {
    marginVertical: '5@vs',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5@vs',
  },
  time: {
    flexDirection: 'row',
  },
}))
