import { useAppSelector } from 'hooks/redux'
import { useAppState } from 'hooks/useAppState'
import I18n from 'i18n-js'
import React, { ReactChild, ReactElement, ReactNode, useEffect } from 'react'
import { AppState, AppStateStatus } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { getUser } from 'state/user/selectors'

interface IAppLogic {
  children: ReactNode | ReactChild | ReactElement
}

const AppLogic = (props: IAppLogic) => {
  const appState = useAppState()
  const { language } = useAppSelector(getUser)

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    )

    return () => {
      subscription.remove()
    }
  }, [])

  // App state
  useEffect(() => {}, [appState])

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true })
    }, 500)
  })

  useEffect(() => {
    I18n.locale = language
  }, [language])

  const handleAppStateChange = (appStateProps: AppStateStatus) => {
    if (appStateProps === 'active') {
    }
  }

  return <>{props.children}</>
}

export default AppLogic
