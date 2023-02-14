import { useField } from 'formik'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Alert, Platform, Text, TouchableOpacity, View } from 'react-native'
import FastImage, { Source } from 'react-native-fast-image'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { PERMISSIONS, request } from 'react-native-permissions'
import R from 'res'

import stylesConfig from './MultiImageUpload.styles'

interface IProps {
  name: string
  label?: string
  style?: object
  closeIcon?: string
  validate?: (value: string) => string | undefined
}

const MultiImageUpload = ({
  name,
  label,
  style,
  validate,
}: // closeIcon = 'closeCircle',
IProps) => {
  const styles = useStyles(stylesConfig)
  const [field, , helpers] = useField({ name, validate })
  // const colors = useColors()

  const onCamera = (uri?: string) => async () => {
    const cameraPermission = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    )

    const externalWritePermission = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY
        : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    )

    if (cameraPermission && externalWritePermission) {
      launchCamera(
        { mediaType: 'photo', maxWidth: 300, maxHeight: 400, quality: 1 },
        ({ assets }) => {
          if (!assets) {
            helpers.setValue(field.value.length > 0 ? field.value : [])
            return
          }

          // @ts-ignore
          const uriParts = assets[0].uri.split('.')
          const fileType = uriParts[uriParts.length - 1]

          const file = {
            uri: assets[0].uri,
            name: `image.${fileType}`,
            type: `image/${fileType}`,
          }

          if (uri && field.value) {
            helpers.setValue(
              field.value.map((item: { uri: number | Source }) =>
                item.uri === uri ? file : item,
              ),
            )
            return
          }

          helpers.setValue(field.value ? [...field.value, file] : [file])
        },
      )
    }
  }

  const onGallery = (uri?: string) => async () => {
    const readPermission = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    )

    if (readPermission) {
      launchImageLibrary(
        { mediaType: 'photo', maxWidth: 300, maxHeight: 400, quality: 1 },
        ({ assets }) => {
          if (!assets) {
            helpers.setValue(field.value.length > 0 ? field.value : [])
            return
          }

          // @ts-ignore
          const uriParts = assets[0].uri.split('.')
          const fileType = uriParts[uriParts.length - 1]

          const file = {
            uri: assets[0].uri,
            name: `image.${fileType}`,
            type: `image/${fileType}`,
          }

          if (uri && field.value) {
            helpers.setValue(
              field.value.map((item: { uri: number | Source }) =>
                item.uri === uri ? file : item,
              ),
            )
            return
          }

          helpers.setValue(field.value ? [...field.value, file] : [file])
        },
      )
    }
  }

  function onPick(uri?: string) {
    Alert.alert('uploadImage', '', [
      Platform.OS === 'ios'
        ? { text: 'camera', onPress: onCamera(uri) }
        : { text: 'cancel', style: 'cancel' },

      { text: 'gallery', onPress: onGallery(uri) },

      Platform.OS === 'ios'
        ? { text: 'cancel', style: 'cancel' }
        : { text: 'camera', onPress: onCamera(uri) },
    ])
  }

  return (
    <View style={style}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View style={styles.images}>
        {field.value && field.value.length > 0
          ? field.value.map(
              (item: Source, index: React.Key | null | undefined) => (
                <TouchableOpacity
                  style={styles.image}
                  onPress={() => onPick(item.uri)}
                  key={index}>
                  <FastImage
                    style={styles.image}
                    source={item}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ),
            )
          : null}

        <TouchableOpacity style={styles.uploadButton} onPress={() => onPick()}>
          <Text style={styles.uploadText}>
            <R.icons.AddFotoIcon />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MultiImageUpload
