import { createStyles } from 'utils/createStyles'
export default createStyles(colors => ({
  main: {
    flex: 1,
    marginVertical: '20@vs',
  },
  userCard: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '10@vs',
    marginBottom: '25@vs',
  },
  img: {
    width: '50@vs',
    height: '50@vs',
    borderRadius: '50@vs',
  },
  userTitle: {
    marginLeft: '10@s',
    alignItems: 'center',
  },
  grade: {
    marginTop: '4@vs',
  },
  btn: {
    backgroundColor: 'transparent',
    height: '35@vs',
  },
  textBtn: {
    fontSize: '12@ms',
  },
  dateSection: {
    marginTop: '27@vs',
    marginBottom: '5@vs',
  },
  smallText: {
    marginTop: '20@vs',
    marginBottom: '5@vs',
  },
  title: {
    width: '90%',
    marginBottom: '20@vs',
  },
  price: {
    marginTop: '5@vs',
  },
  btnCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  btnSecond: {
    backgroundColor: 'transparent',
  },
  addImageContainer: {
    width: '65@s',
    height: '65@s',
    borderWidth: '1@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10@s',
    borderColor: colors.textSecondary,
    marginRight: '10@s',
  },
  image: {
    width: '65@s',
    height: '65@s',
    borderRadius: '10@s',
  },
  imageContent: {
    flexDirection: 'row',
    marginTop: '5@s',
  },
}))
