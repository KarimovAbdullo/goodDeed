import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    flex: '1@s',
    paddingHorizontal: '20@s',
    paddingVertical: '20@vs',
    flexDirection: 'column',
  },
  image: {
    width: '128@s',
    height: '129@s',
  },
  avatarContent: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: '20@vs',
  },
  avatarTextContent: {
    paddingLeft: '10@s',
  },
  proContent: {
    position: 'absolute',
    width: '40@s',
    height: '40@s',
    borderWidth: '2@s',
    borderColor: colors.orange,
    borderRadius: '40@s',
    justifyContent: 'center',
    alignItems: 'center',
    top: '140@vs',
    backgroundColor: colors.white,
    left: '63@s',
  },
  textProContent: {
    textAlign: 'center',
    color: colors.black,
    fontSize: '16@s',
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
  hr: {
    height: '1@vs',
    backgroundColor: colors.gray,
    marginTop: '50@vs',
  },
  textContainer: {
    marginVertical: '17@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hrInlene: {
    height: '1@vs',
    backgroundColor: colors.gray,
  },
}))
