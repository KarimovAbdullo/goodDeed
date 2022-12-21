import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import React from 'react'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import R from 'res'

interface CustomModalProps {
  text?: string
  buttonTitle?: string | string[] | undefined
  onClose?: () => void
  visible?: boolean
  back?: () => void
  style?: object
  buttonPrimary?: string | string[] | undefined
}

const CustomModal = ({
  text,
  buttonTitle,
  onClose,
  visible,
  back,
  style,
  buttonPrimary,
}: CustomModalProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={[styles.modal, style]}>
        <View style={styles.modalContentWraper}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={back} style={styles.icon}>
              <R.icons.CloseIcon />
            </TouchableOpacity>

            <Typo.Body type="regular14" center>
              {text}
            </Typo.Body>

            {buttonTitle ? (
              <ButtonSecondary
                textStyle={styles.textButton}
                text={buttonTitle}
                onPress={onClose}
                style={styles.button}
              />
            ) : null}

            {buttonPrimary ? (
              <CustomButton
                text={buttonPrimary}
                onPress={onClose}
                style={styles.buttonPrimary}
              />
            ) : null}
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    height: 30,
    elevation: 2,
    marginTop: 20,
    backgroundColor: 'white',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingTop: 200,
  },
  modalContentWraper: {
    // flex: 1,
  },
  modalContent: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16,
    borderRadius: 20,
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'flex-end',
  },
  textButton: {
    fontSize: 12,
  },
  buttonPrimary: {
    height: 30,
    elevation: 2,
    marginTop: 20,
    backgroundColor: 'white',
  },
})

export default CustomModal
