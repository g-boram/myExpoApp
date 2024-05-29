import React from 'react'
import ProjectTitle from '../shared/ProjectTitle'
import TranslationApp from './TranslationApp'

import { View } from 'react-native'

const TranslationAppStart = () => {
  return (
    <View>
      <ProjectTitle title='My Gallery' />
      <TranslationApp />
    </View>
  )
}

export default TranslationAppStart
