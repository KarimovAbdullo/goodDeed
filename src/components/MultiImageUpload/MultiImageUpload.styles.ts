import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  uploadButton: {
    width: '65@s',
    height: '65@s',
    borderRadius: '8@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: '1@s',
    borderColor: colors.textSecondary,
  },
  label: {
    marginBottom: '8@vs',
    color: colors.textSecondary,
  },
  uploadText: {
    marginTop: '6@vs',
    color: colors.textSecondary,
  },
  image: {
    width: '65@s',
    height: '65@s',
    borderRadius: '8@s',
    marginRight: '12@s',
    marginBottom: '12@vs',
  },
  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  delete: {
    width: '22@s',
    height: '22@s',
    position: 'absolute',
    right: '3@s',
    top: '3@s',
  },
}))
