import { createStyles } from 'utils/createStyles'
export default createStyles(colors => ({
  main: {
    flex: 1,
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

  wrapper: {},
  screen: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#4066a3',
  },
  textInput: {
    backgroundColor: '#fff',
    marginBottom: 60,
    borderColor: 'red',
    padding: 15,
    height: 40,
    width: 300,
  },

  keyboard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.gray,
    paddingTop: '10@vs',
    paddingBottom: '30@vs',
    paddingHorizontal: '15@s',
  },

  input: {
    width: '75%',
    borderRadius: '50@vs',
    backgroundColor: 'white',
    height: '40@vs',
    paddingHorizontal: '12@s',
  },
}))
