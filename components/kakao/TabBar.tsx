import { Fontisto, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'


const TabButton = ({ isSelected, onPress, activeIconName, inactiveIconName, isIconFontisto, isIconIonicons }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      {isIconFontisto && <Fontisto name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />}
      {isIconIonicons && <Ionicons name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />}
    </TouchableOpacity>
  )
}

const TabBar = ({ selectedTabIdx, setSelectedTabIdx }: any) => {
  return (
    <View style={{
      flexDirection: "row",
      borderTopWidth: 0.5,
      borderColor: "grey"
    }}>
      <TabButton
        isSelected={selectedTabIdx === 0}
        onPress={() => setSelectedTabIdx(0)}
        activeIconName={"person"}
        inactiveIconName={"persons"}
        isIconFontisto
      />
      <TabButton
        isSelected={selectedTabIdx === 1}
        onPress={() => setSelectedTabIdx(1)}
        activeIconName={"chatbubble"}
        inactiveIconName={"chatbubble-outline"}
        isIconIonicons
      />
      <TabButton
        isSelected={selectedTabIdx === 2}
        onPress={() => setSelectedTabIdx(2)}
        activeIconName={"pricetag"}
        inactiveIconName={"pricetag-outline"}
        isIconIonicons
      />
      <TabButton
        isSelected={selectedTabIdx === 3}
        onPress={() => setSelectedTabIdx(3)}
        activeIconName={"add-circle"}
        inactiveIconName={"add-circle-outline"}
        isIconIonicons
      />
    </View>
  )
}

export default TabBar
