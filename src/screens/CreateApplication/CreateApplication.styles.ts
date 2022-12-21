import { Dimensions } from 'react-native'
import { createStyles } from 'utils/createStyles'
export default createStyles(color => ({
  header: {
    backgroundColor: color.black,
    position: 'absolute',
    top: 0,
    height: '60@vs',
  },
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  iconSearch: {
    zIndex: '1@s',
    position: 'absolute',
    right: '10@s',
    top: '39%',
  },
  iconLocation: {
    zIndex: '1@s',
    position: 'absolute',
    right: '10@s',
    top: '50%',
  },
  inputContent: {
    width: '69%',
    height: '50@vs',
  },
  button: {
    width: '100@s',
    height: '50@vs',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Hr: {
    height: '1@vs',
    backgroundColor: color.gray,
    marginVertical: '20@vs',
  },
  textContent: {
    marginVertical: '10@vs',
  },
  buttonSecondary: {
    backgroundColor: color.background,
  },
  sheetSearch: {
    flex: '1@s',
  },
  seacrhContent: {
    flex: 1,
    paddingHorizontal: '10@vs',
  },
  location: {
    zIndex: '1@s',
    position: 'absolute',
    right: '50%',
    top: '40%',
  },
  padding: {
    paddingTop: 20,
  },
}))
