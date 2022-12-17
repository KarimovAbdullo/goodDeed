import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import Typo from 'components/typo'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { useLayoutEffect } from 'react'
import { Image, SafeAreaView, SectionList, Text, View } from 'react-native'
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

  const section = [
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
  ]

  return (
    <Container>
      <FocusAwareStatusBar backgroundColor={R.colors.headerRed} />
      <SafeAreaView style={styles.main}>
        <SectionList
          sections={section}
          renderItem={({ item }) => (
            <View>
              <Typo.Body type="small" color="textSecondary" style={styles.date}>
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
            </View>
          )}
          stickySectionHeadersEnabled
        />
      </SafeAreaView>
    </Container>
  )
}

export default ChatScreen
