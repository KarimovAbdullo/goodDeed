import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    flexGrow: '1@s',
    paddingHorizontal: '20@s',
    paddingTop: '10@vs',
  },
  input: {
    borderRadius: '10@s',
    marginBottom: '10@vs',
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
  },
  button: {
    height: '35@vs',
    backgroundColor: colors.background,
    marginTop: '10@vs',
  },
  itemContainer: {
    flex: '1@s',
  },
  itemContent: {
    minHeight: '100%',
  },
}))
