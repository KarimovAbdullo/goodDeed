import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { useLayoutEffect } from 'react'
import {
  Image,
  SafeAreaView,
  SectionList,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import R from 'res'
import { getApplicationScreenOptions } from 'utils/navigation'

import styleConfig from './ChatScreen.style'

const ChatScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(styleConfig)
  const colors = useColors()

  useLayoutEffect(() => {
    navigation.setOptions({
      ...getApplicationScreenOptions(colors),
    })
  }, [colors])

  const [val, setValue] = useState('')
  const [error, showError] = useState<Boolean>(true)
  // const [toDoList, setToDos] = useState([
  //   {
  //     title: '12:00',
  //     data: [
  //       {
  //         id: '1',
  //         user: 'Ирина',
  //         task: 'Добрый день!',
  //         date: '4 сентября 2021г.',
  //         time: '16:30',
  //       },
  //     ],
  //   },
  // ])

  const handleSubmit = () => {
    // setToDos([...toDoList, { task: val }])
    setValue('')
  }

  return (
    <View style={styles.main}>
      <Container>
        <FocusAwareStatusBar backgroundColor={R.colors.headerRed} />
        <SafeAreaView>
          <SectionList
            sections={[
              {
                title: '12:00',
                data: [
                  {
                    id: '1',
                    user: 'Ирина',
                    task: 'Добрый день!',
                    date: '4 сентября 2021г.',
                    time: '16:30',
                  },
                ],
              },
            ]}
            renderItem={({ item }) => (
              <View>
                <Typo.Body
                  type="small"
                  color="textSecondary"
                  style={styles.date}>
                  {item.date}
                </Typo.Body>
                <View style={styles.chat}>
                  <Image
                    source={require('../../assets/images/chatGirl.png')}
                    style={styles.img}
                  />

                  <View style={styles.text}>
                    <Typo.Body
                      type="regular14"
                      color="orange"
                      style={styles.user}>
                      {item.user}
                    </Typo.Body>

                    <Typo.Body type="regular14" style={styles.task}>
                      {item.task}
                      {'   '}
                      <Typo.Body type="small10">16:30</Typo.Body>
                    </Typo.Body>
                  </View>
                </View>

                <View />
              </View>
            )}
            stickySectionHeadersEnabled
          />
        </SafeAreaView>
      </Container>
      <View style={styles.keyboard}>
        <TouchableOpacity>
          <R.icons.MediaIcon />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={val}
          placeholder="Сообщение ..."
          onChangeText={e => {
            setValue(e)
          }}
          onSubmitEditing={() => showError(true)}
        />
        {error ? (
          <TouchableOpacity onPress={handleSubmit}>
            <R.icons.SendIcon />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  )
}

export default ChatScreen
