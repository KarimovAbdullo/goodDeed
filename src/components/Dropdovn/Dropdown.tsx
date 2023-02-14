import React from 'react'
import { StyleSheet, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
interface IPops {
  open: boolean
  value: string
  items: object[]
  setOpen: boolean | any
  setValue: string | any
  setItems: () => void
  style?: object
  textStyle?: object
}

const DropDown = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
}: IPops) => {
  return (
    <View style={{ alignItems: 'flex-end' }}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        // setValue={e => console.log(e())}
        // setItems={setItems}
        // onChangeValue={e => console.log(e)}
        style={styles.dropdown_container}
        textStyle={styles.dropdown_itemstyle}
        containerStyle={{ width: 80 }}
        showArrowIcon={false}
        showTickIcon={false}
      />
    </View>
  )
}
export default DropDown

//code here

const styles = StyleSheet.create({
  container: {
    borderColor: 'transparent',
    // width: '10%',
  },

  dropdown_container: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'flex-end',
    borderColor: 'transparent',
  },

  dropdown_itemstyle: {
    borderColor: 'transparent',

    color: '#FFC24D',
  },
  ic: {
    color: 'red',
  },
})
