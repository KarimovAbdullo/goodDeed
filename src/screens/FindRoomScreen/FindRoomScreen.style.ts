import { createStyles } from 'utils/createStyles'
export default createStyles(colors => ({
  main: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: '20@s',
  },
  topTitle: {
    marginTop: '10@vs',
  },
  checkContent: {
    flexDirection: 'row',
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
  input: {
    width: '70%',
  },
  button: {
    width: '97@s',
    height: '40@vs',
  },
  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonSecondary: {
    height: '35@vs',
    backgroundColor: colors.background,
    marginVertical: '10@vs',
  },
  inputContainer: {
    height: '40@vs',
    fontSize: '12@ms',
  },
  textButton: {
    fontSize: '12@ms',
  },
  textContent: {
    padding: '10@s',
    borderRadius: '10@s',
    backgroundColor: colors.gray,
    height: '180@s',
  },
  buttonPrimary: {
    marginBottom: '20@vs',
  },
  itemContent: {
    flex: 1,
  },
  active: {
    backgroundColor: colors.background,
  },
  error: {
    backgroundColor: colors.linearStart,
  },
  mapContent: {
    marginTop: '10@vs',
    borderRadius: '10@s',
  },
  map: {
    height: '470@vs',
    borderRadius: '10@s',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10@s',
  },
  Hr: {
    height: '1@vs',
    backgroundColor: colors.gray,
    marginVertical: '20@vs',
  },
  seacrhContent: {
    flex: 1,
    paddingHorizontal: '10@vs',
  },
  sheetSearch: {
    flex: '1@s',
  },
  iconSearch: {
    zIndex: '1@s',
    position: 'absolute',
    right: '10@s',
    top: '45%',
  },
  iconLocation: {
    zIndex: '1@s',
    position: 'absolute',
    right: '10@s',
    top: '60%',
  },
  location: {
    zIndex: '1@s',
    position: 'absolute',
    right: '50%',
    top: '45%',
  },
  sheetInput: {
    width: '65%',
  },
}))
