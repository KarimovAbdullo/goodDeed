import { createStyles } from 'utils/createStyles'
export default createStyles(color => ({
  titleCard: {
    alignItems: 'center',
    marginVertical: '33@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconCard: {
    position: 'absolute',
    right: 0,
  },

  topCard: {
    backgroundColor: '#FFC7C7',
    borderRadius: '10@s',
    paddingLeft: '30@s',
    marginBottom: '18@vs',
    marginTop: '5@vs',
  },

  midCard: {
    backgroundColor: '#B5DBFF',
    borderRadius: '10@s',
    marginBottom: '18@vs',
    paddingRight: '30@s',
  },

  bottomCard: {
    backgroundColor: '#95D6B4',
    borderRadius: '10@s',
    paddingLeft: '30@s',
    marginBottom: '18@vs',
    marginTop: '5@vs',
    paddingVertical: '8@vs',
  },

  titleTopCard: {
    justifyContent: 'center',
    width: '70%',
    marginTop: '20@s',
  },

  titleMidCard: {
    width: '60%',
    marginTop: '30@s',
    bottom: '10@s',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  titleBottomCard: {
    justifyContent: 'center',
    width: '70%',
    marginTop: '20@s',
  },

  btnTop: {
    width: '120@s',
    height: '35@vs',
    borderRadius: '10@s',
    marginTop: '50@vs',
    marginBottom: '25@vs',
  },

  btnMid: {
    width: '120@s',
    height: '35@vs',
    borderRadius: '10@s',
    marginTop: '40@vs',
    marginBottom: '25@vs',
    alignSelf: 'flex-end',
    marginRight: '20@s',
  },
  btnBottom: {
    width: '120@s',
    height: '35@vs',
    borderRadius: '10@s',
    marginTop: '50@vs',
    marginBottom: '25@vs',
  },

  imageCard: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '155@s',
    height: '183@vs',
  },

  midImg: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '133@s',
    height: '180@vs',
  },

  imageBottomCard: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '112@s',
    height: '190@vs',
  },

  btnStyle: {
    width: '150@s',
    height: '34@vs',
    backgroundColor: 'transparent',
    borderWidth: 1,
    color: 'red',
    borderColor: 'white',
  },
}))
