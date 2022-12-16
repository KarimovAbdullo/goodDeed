import { createStyles } from 'utils/createStyles'
export default createStyles(color => ({
  text: {
    fontSize: '16@vs',
    textAlign: 'center',
    color: color.black,
  },
  header: {
    height: '10%',
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  icon: {
    position: 'absolute',
    left: '15@vs',
  },
}))
