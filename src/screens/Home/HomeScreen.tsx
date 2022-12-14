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
        <StatusBar backgroundColor={R.colors.backroundPrimary} />
        <View>
          <View style={styles.titleCard}>
            <Typo.title color={'textPrimary'}>Добро пожаловать!</Typo.title>
            <View style={styles.iconCard}>
              <BellIcon />
            </View>
          </View>
        </View>

        <View>
          <View style={styles.topCard}>
            <View style={styles.titleTopCard}>
              <Typo.title color={'textSecondary'}>
                Вы хотите сделать доброе дело?
              </Typo.title>
            </View>
            <View style={styles.btnTop}>
              <Text>Da,Xochu</Text>
            </View>
            <View style={styles.imageCard}>
              <Image
                source={require('./../../assets/images/man.png')}
                style={styles.imgMan}
              />
            </View>
          </View>
        </View>

        <View>
          <View style={styles.midCard}>
            <View style={styles.midImg}>
              <Image
                source={require('./../../assets/images/girl.png')}
                style={styles.imgGirl}
              />
            </View>
            <View style={styles.titleMidCard}>
              <Typo.title color={'textSecondary'}>
                Вы нуждаетесь в доброй услуге?
              </Typo.title>
            </View>
            <View style={styles.btnMid}>
              <Text>Да, спасибо</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.bottomCard}>
            <View style={styles.titleTopCard}>
              <Typo.title color={'textSecondary'}>Комната находок</Typo.title>
            </View>
            <View style={styles.btnTop}>
              <Text>Da,Xochu</Text>
            </View>
            <View style={styles.imageBottomCard}>
              <Image
                source={require('./../../assets/images/travel.png')}
                style={styles.imgTravel}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Container>
  )
}

export default HomeScreen
