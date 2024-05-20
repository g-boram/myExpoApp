import React from 'react'
import { Text, View } from 'react-native'

type propsText = {
  title: string
}

const ProjectTitle = ({ title }: propsText) => {
  return (
    <View>
      <Text style={{ 
        backgroundColor: '#000',
        color: '#fff',
        height: 30,
        textAlign:'center',
        paddingTop: 8,
        marginVertical: 20,
      }}>
        { title }
      </Text>
    </View>
  )
}

export default ProjectTitle
