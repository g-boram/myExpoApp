import React from 'react'
import ProjectTitle from '../shared/ProjectTitle'
import KakaoBus from './KakaoBus'

import { View } from 'react-native'

const KakaoBusStart = () => {
  return (
    <View>
      <ProjectTitle title='KakaoBus' />
      <KakaoBus />
    </View>
  )
}

export default KakaoBusStart
