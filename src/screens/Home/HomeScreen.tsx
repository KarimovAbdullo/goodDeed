import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import Container from 'components/Container/Container'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, SafeAreaView, StatusBar, View } from 'react-native'
import Config from 'react-native-config'
import R from 'res'

import stylesConfig from './HomeScreen.styles'
//anamin darkor
const HomeScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)
  console.log(Config.SIZE_MATTERS_BASE_WIDTH)

  const goServiceScreen = () => {
    navigation.navigate(R.routes.SCREEN_SERVICE)
  }

  return (
    <Container>
      <SafeAreaView>
        <StatusBar backgroundColor={R.colors.background} />
        <View style={styles.titleCard}>
          <Typo.Title flex center color={'black'}>
            Добро пожаловать!
          </Typo.Title>

          <View style={styles.iconCard}>
            <R.icons.BellIcon />
          </View>
        </View>

        <View style={styles.topCard}>
          <View style={styles.titleTopCard}>
            <Typo.Title color={'white'}>
              Вы хотите сделать доброе дело?
            </Typo.Title>
            <ButtonSecondary
              text={'Да, хочу'}
              onPress={goServiceScreen}
              style={styles.btnStyle}
              textStyle={styles.btnText}
            />
          </View>
          <Image
            source={require('./../../assets/images/man.png')}
            style={styles.imageCard}
          />
        </View>

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
            <ButtonSecondary
              text={'Да, хочу'}
              style={styles.btnStyle}
              textStyle={styles.btnText}
            />
          </View>
        </View>

        <View style={styles.bottomCard}>
          <View style={styles.titleTopCard}>
            <Typo.Title color={'white'}>
              Вы хотите сделать доброе дело?
            </Typo.Title>
            <ButtonSecondary
              text={'Да, хочу'}
              onPress={goServiceScreen}
              style={styles.btnStyle}
              textStyle={styles.btnText}
            />
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
