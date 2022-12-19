import {
  BottomSheetBackdrop,
  BottomSheetFooterProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { useStyles } from 'hooks/useStyles'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import stylesConfig from './BottomSheet.styles'

interface IProps {
  snapPoints?: string[]
  children: React.ReactElement | string | string[]
  handleOff?: boolean
  handleStyle?: object
  backdropOff?: boolean
  customStyleOff?: boolean
  shouldMeasureContentHeight?: boolean
  onDismiss?: () => void
  style?: object
  backdropOpacity?: number
  footerComponent?: FC<BottomSheetFooterProps>
}

const BottomSheetComponent = React.forwardRef(
  (
    {
      backdropOpacity = 0.6,
      children,
      snapPoints = ['50%'],
      handleOff,
      handleStyle,
      onDismiss,
      style,
      backdropOff = false,
      customStyleOff = false,
      footerComponent,
    }: IProps,
    ref: React.Ref<BottomSheetModalMethods>,
  ) => {
    const styles = useStyles(stylesConfig)

    return (
      <BottomSheetModal
        footerComponent={footerComponent}
        ref={ref}
        handleComponent={
          handleOff
            ? null
            : () => (
                <View style={[styles.handleContent, handleStyle]}>
                  <View style={styles.handle} />
                </View>
              )
        }
        backdropComponent={
          backdropOff
            ? null
            : props => (
                <BottomSheetBackdrop
                  {...props}
                  style={{
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: 'black',
                  }}
                  opacity={backdropOpacity}
                  disappearsOnIndex={-1}
                />
              )
        }
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        android_keyboardInputMode="adjustResize"
        backgroundStyle={!customStyleOff && styles.container}
        style={[!customStyleOff && styles.container, style]}
        onDismiss={onDismiss}
        snapPoints={snapPoints}>
        {children}
      </BottomSheetModal>
    )
  },
)

export default BottomSheetComponent
