import { createStyles } from 'utils/createStyles'
export default createStyles(colors => ({
  container: {
    flex: '1@s',
  },
  titleContent: {
    // marginTop: '10@s',
  },
  textContent: {
    padding: '13@s',
    backgroundColor: colors.gray,
    borderRadius: '10@s',
    marginTop: '10@vs',
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
  checkBoxContent: {
    flexDirection: 'row',
    marginVertical: '5@s',
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: '10@vs',
    paddingHorizontal: '20@s',
  },
  button: {
    padding: '10@s',
    backgroundColor: colors.gray,
    width: '150@s',
    borderRadius: '20@s',
    justifyContent: 'center',
    marginTop: '10@vs',
  },
  textButton: {
    textAlign: 'center',
    color: colors.black,
    fontSize: '16@ms',
    fontWeight: '300',
  },
}))
