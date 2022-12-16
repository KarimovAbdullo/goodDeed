import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    flex: '1@s',
    paddingHorizontal: '20@s',
    flexDirection: 'column',
  },

  itemContent: {
    flex: '1@s',
  },
  itemContainer: {
    borderRadius: '10@s',
    paddingHorizontal: '20@s',
    paddingVertical: '10@vs',
    backgroundColor: colors.gray,
    marginTop: '15@vs',
  },
  dataContainer: {
    marginTop: '10@vs',
  },
}))
