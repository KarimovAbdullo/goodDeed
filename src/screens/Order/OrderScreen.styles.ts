import { createStyles } from 'utils/createStyles'
export default createStyles(colors => ({
  container: {
    flex: '1@s',
    paddingHorizontal: '20@s',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  temContent: {
    backgroundColor: colors.fiolet,
  },
  dataContent: {
    marginTop: '10@vs',
  },
  textContent: {
    padding: 10,
    backgroundColor: colors.gray,
    borderRadius: '10@s',
    marginVertical: '10@vs',
  },
  itemContent: {
    flex: '1@s',
  },
  addImageContainer: {
    width: '65@s',
    height: '65@s',
    borderWidth: '1@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10@s',
    borderColor: colors.textSecondary,
    marginTop: '10@vs',
    marginBottom: '20@vs',
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
  buttonSecondary: {
    backgroundColor: colors.background,
    marginBottom: '10@s',
    borderColor: colors.textSecondary,
  },
  buttonPremary: {
    backgroundColor: colors.linearStart,
    marginBottom: '10@s',
  },
  containerText: {
    marginBottom: '10@vs',
  },
  imageContainer: {
    flexDirection: 'row',
  },
}))
