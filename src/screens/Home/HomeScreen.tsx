import BellIcon from 'assets/icons/BellIcon'
import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import Container from 'components/container/Container'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import {
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native'
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

          <TouchableOpacity style={styles.btnTop}>
            <ButtonSecondary text={'Да, хочу'} style={styles.btnStyle} />
          </TouchableOpacity>

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
              <ButtonSecondary text={'Да, хочу'} style={styles.btnStyle} />
            </View>
          </View>
        </View>

        <View style={styles.bottomCard}>
          <View style={styles.titleBottomCard}>
            <Typo.Title color={'white'}>КомнатаAA находок</Typo.Title>
          </View>

          <View style={styles.btnBottom}>
            <ButtonSecondary text={'Да, хочу'} style={styles.btnStyle} />
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
