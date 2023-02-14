import { createStyles } from 'utils/createStyles'
export default createStyles(color => ({
  text: {
    fontSize: '16@vs',
    textAlign: 'center',
    color: color.black,
    justifyContent: 'center',
  },
  header: {
    height: '10%',
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: '15@s',
  },
  textContainer: {
    width: '95%',
  },
  icon: {
    left: '10@s',
  },
}))
