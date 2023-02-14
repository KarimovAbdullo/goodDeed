import { createStyles } from 'utils/createStyles'
export default createStyles(colors => ({
  main: {
    flex: 1,
    marginVertical: '20@vs',
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
    marginBottom: '20@vs',
  },
  btnCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    backgroundColor: colors.white,
    height: '37@vs',
  },
  textButton: {
    color: '#4F4F4F',
    fontWeight: '400',
    fontSize: '14@ms',
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '30@vs',
  },
}))
