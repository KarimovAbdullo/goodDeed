import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: '10@s',
    paddingVertical: '10@vs',
    alignItems: 'center',
    width: '100%',
  },
  itemContainer: {
    flexGrow: '1@s',
    paddingHorizontal: '20@s',
    paddingBottom: '10@vs',
  },
  itemContent: {
    minHeight: '100%',
  },
  changeLanguageContent: {
    alignSelf: 'flex-end',
    marginTop: '30@vs',
  },
  languageText: {
    color: colors.orange,
  },
  image: {
    width: '195.9@vs',
    height: '165.5@vs',
    marginTop: '15@vs',
    marginBottom: '60@vs',
  },
  inputContent: {
    marginTop: '30@vs',
    marginBottom: '20@vs',
  },
}))
