import BellIcon from 'assets/icons/BellIcon'
import Container from 'components/container/Container'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native'
import Config from 'react-native-config'
import R from 'res'
import Typo from 'typo'

import stylesConfig from './HomeScreen.styles'

const HomeScreen = () => {
  const styles = useStyles(stylesConfig)
  console.log(Config.SIZE_MATTERS_BASE_WIDTH)

  return (
    <Container>
      <SafeAreaView>
        <StatusBar backgroundColor={R.colors.background} />
        <View style={styles.titleCard}>
          <Typo.Title flex center color={'black'}>
            Добро пожаловать!
          </Typo.Title>

          <View style={styles.iconCard}>
            <BellIcon />
          </View>
        </View>

        <View style={styles.topCard}>
          <View style={styles.titleTopCard}>
            <Typo.Title color={'white'}>
              Вы хотите сделать доброе дело?
            </Typo.Title>
          </View>

          <View style={styles.btnTop}>
            <Text>Da,Xochu</Text>
          </View>

          <Image
            source={require('./../../assets/images/man.png')}
            style={styles.imageCard}
          />
        </View>

        <View>
          <View style={styles.midCard}>
            <Image
              source={require('./../../assets/images/girl.png')}
              style={styles.midImg}
            />

            <View style={styles.titleMidCard}>
              <Typo.Title color={'white'}>
                Вы нуждаетесь в доброй услуге?
              </Typo.Title>
            </View>

            <View style={styles.btnMid}>
              <Text>Da,Xochu</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomCard}>
          <View style={styles.titleBottomCard}>
            <Typo.Title color={'white'}>Комната находок</Typo.Title>
          </View>

          <View style={styles.btnBottom}>
            <Text>Da,Xochu</Text>
          </View>

          <Image
            source={require('./../../assets/images/travel.png')}
            style={styles.imageBottomCard}
          />
        </View>
      </SafeAreaView>
    </Container>
  )
}

export default HomeScreen
