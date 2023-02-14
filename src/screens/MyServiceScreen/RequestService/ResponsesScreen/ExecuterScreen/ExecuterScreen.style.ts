import { createStyles } from 'utils/createStyles'
export default createStyles(colors => ({
  main: {
    marginTop: '15@vs',
    flexDirection: 'row',
  },
  proContent: {
    position: 'absolute',
    width: '50@s',
    height: '50@s',
    borderWidth: '2@s',
    borderColor: colors.orange,
    borderRadius: '40@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    left: '143@s',
    bottom: '-20@vs',
  },
  textProContent: {
    textAlign: 'center',
    color: colors.black,
    fontSize: '16@s',
  },
  avatarCard: {
    alignItems: 'center',
    marginVertical: '27@vs',
  },
  img: {
    width: '250@vs',
    height: '250@vs',
  },
  avatarTextContent: {
    paddingLeft: '10@s',
  },

  mb: {
    marginBottom: '15@vs',
  },

  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    backgroundColor: colors.white,
    height: '37@vs',
    width: '160@s',
  },
  textButton: {
    color: '#4F4F4F',
    fontWeight: '10',
    fontSize: '12@ms',
  },

  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '30@vs',
  },
}))
