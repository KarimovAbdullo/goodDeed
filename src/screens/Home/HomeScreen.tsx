import { ButtonSecondary } from 'components/ButtonSecondary/ButtonSecondary'
import Container from 'components/Container/Container'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import {
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'

import stylesConfig from './HomeScreen.styles'

const T = R.lang.screen_home

//anamin darkor
const HomeScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)

  console.log(lang(`${T}.home`))
  console.log(lang(`${T}.home`))

  const goServiceScreen = () => {
    navigation.navigate(R.routes.SCREEN_SERVICE)
  }

  const goNoteficaton = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_NOTIFICATIONS)
  }
  const goFindRoom = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_FINDROOM)
  }

  const goCreateApplication = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_CREATE_APPLICATION)
  }

  return (
    <Container>
      <SafeAreaView>
        <StatusBar backgroundColor={R.colors.background} />
        <View style={styles.titleCard}>
          <Typo.Title type="regular2" flex center color={'black'}>
            {lang(`${T}.title`)}
          </Typo.Title>

          <TouchableOpacity style={styles.iconCard} onPress={goNoteficaton}>
            <R.icons.BellIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.topCard}>
          <View style={styles.titleTopCard}>
            <Typo.Title color={'white'}>{lang(`${T}.topTitle`)}</Typo.Title>
            <ButtonSecondary
              text={lang(`${T}.topBtnTitle`)}
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
            <Typo.Title color={'white'}>{lang(`${T}.midTitle`)}</Typo.Title>
          </View>
          <View style={styles.btnMid}>
            <ButtonSecondary
              text={lang(`${T}.midBtnTitle`)}
              style={styles.btnStyle}
              textStyle={styles.btnText}
              onPress={goCreateApplication}
            />
          </View>
        </View>

        <View style={styles.bottomCard}>
          <View style={styles.titleTopCard}>
            <Typo.Title color={'white'}>{lang(`${T}.bottomTitle`)}</Typo.Title>
            <ButtonSecondary
              text={lang(`${T}.bottomBtnTitle`)}
              onPress={goFindRoom}
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
