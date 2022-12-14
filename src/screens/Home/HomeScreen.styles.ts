import { createStyles } from 'utils/createStyles'
export default createStyles(color => ({
  titleCard: {
    alignItems: 'center',
    marginVertical: '40@vs',
    flexDirection: 'row',
    paddingLeft: 90,
  },

  iconCard: {
    marginLeft: '80@s',
    flexDirection: 'row',
  },

  topCard: {
    backgroundColor: '#FFC7C7',
    borderRadius: '10@s',
    paddingLeft: '40@s',
    marginBottom: '18@vs',
  },

  titleTopCard: {
    justifyContent: 'center',
    padding: '10@s',
    width: '70%',
    marginTop: '14@s',
    right: '10@s',
    bottom: '10@s',
  },

  btnTop: {
    width: '120@s',
    borderWidth: '1@s',
    borderRadius: '10@s',
    marginTop: '50@vs',
    marginBottom: '25@vs',
  },

  imageCard: {
    position: 'absolute',
    left: '200@s',
    bottom: '2@vs',
  },

  imgMan: {
    width: '155@s',
    height: '183@vs',
  },

  midCard: {
    backgroundColor: '#B5DBFF',
    borderRadius: '10@s',
    marginBottom: '18@vs',
    paddingRight: '20@s',
  },

  midImg: {
    position: 'absolute',
    left: '5@s',
    bottom: '2@vs',
  },

  titleMidCard: {
    width: '60%',
    marginTop: '30@s',
    bottom: '10@s',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    paddingRight: '10@s',
    textAlign: 'right',
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center',
  },

  imgGirl: {
    width: '133@s',
    height: '180@vs',
  },

  btnMid: {
    width: '120@s',
    borderWidth: '1@s',
    borderRadius: '10@s',
    marginTop: '50@vs',
    marginBottom: '25@vs',
    alignSelf: 'flex-end',
  },

  bottomCard: {
    backgroundColor: '#95D6B4',
    borderRadius: '10@s',
    paddingLeft: '40@s',
    marginBottom: '18@vs',
  },

  imgTravel: {
    width: '112@s',
    height: '170@vs',
  },

  imageBottomCard: {
    position: 'absolute',
    left: '235@s',
    bottom: '2@vs',
  },
}))
