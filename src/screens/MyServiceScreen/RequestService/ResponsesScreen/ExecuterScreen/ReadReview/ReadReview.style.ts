import { createStyles } from 'utils/createStyles'
export default createStyles(color => ({
  main: {
    marginTop: '15@vs',
    flexDirection: 'row',
  },
  date: {
    alignSelf: 'center',
    marginTop: '20@vs',
    marginBottom: '15@vs',
  },

  img: {
    width: '38@s',
    height: '38@s',
    marginRight: '10@s',
  },
  card: {
    flexDirection: 'row',
    paddingVertical: '5@vs',
    backgroundColor: color.gray,
    paddingHorizontal: '10@s',
    borderRadius: '10@s',
  },
  info: {
    flexDirection: 'column',
  },
  iconCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10@vs',
  },
  icon: {
    marginRight: '30%',
    marginLeft: '10@s',
  },
  time: {
    right: 0,
    position: 'absolute',
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '30@vs',
  },
}))
