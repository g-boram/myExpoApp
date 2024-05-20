import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const FriendSection = (props: any) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text>친구 {props.friendLenth}</Text>

      <TouchableOpacity onPress={props.onPressArrow}>
        <MaterialIcons name={props.isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color={"black"} />
      </TouchableOpacity>
    </View>
  )
}

export default FriendSection
