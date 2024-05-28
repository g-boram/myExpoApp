import React from 'react'
import { View } from 'react-native'
import ProjectTitle from '../shared/ProjectTitle'
import MyGallery from './MyGallery'

const MyGalleryStart = () => {
  return (
    <View>
      <ProjectTitle title='My Gallery' />
      <MyGallery />
    </View>
  )
}

export default MyGalleryStart
