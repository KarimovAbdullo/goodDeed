import { createStyles } from 'utils/createStyles'
export default createStyles(() => ({
  titleCard: {
    alignItems: 'center',
    marginVertical: '40@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconCard: {
    position: 'absolute',
    right: 0,
  },

  topCard: {
    height: '25%',
    backgroundColor: '#FFC7C7',
    borderRadius: '10@s',
    paddingHorizontal: '35@s',
    paddingVertical: '18@vs',
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
    height: '25%',
    borderRadius: '10@s',
    paddingHorizontal: '35@s',
    paddingVertical: '18@vs',
    marginBottom: '18@vs',
    marginTop: '5@vs',
  },

  titleTopCard: {
    justifyContent: 'space-between',
    width: '70%',
    height: '100%',
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
  btnStyle: {
    width: '150@s',
    height: '34@vs',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
  },
  btnText: {
    color: 'white',
  },

  btnTop: {
    width: '120@s',
    height: '35@vs',
    borderRadius: '10@s',
    marginTop: '50@vs',
    marginBottom: '25@vs',
  },
  //anamin darkor

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
    width: '155@vs',
    height: '195.86@vs',
  },

  midImg: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '133@vs',
    height: '197@vs',
  },

  imageBottomCard: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '112@vs',
    height: '190.29@vs',
  },
}))
