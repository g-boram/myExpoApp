import { SimpleLineIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, Modal, Pressable, TouchableOpacity, View } from 'react-native'


const ArrowButton = ({ iconName, onPress, disabled }) => {
  return (
    <TouchableOpacity disabled={disabled} style={{ justifyContent: "center", paddingHorizontal:20, height: '100%' }}>
      <SimpleLineIcons
        name={iconName}
        size={20}
        onPress={onPress}
        color={disabled ? "transparent" : "black"}
      />
    </TouchableOpacity>
  )
}


const BigImgModal = ({ 
  bigImgModalVisible, 
  onPressBackDrop, 
  selectedImage,
  onPressLeftArrow,
  onPressRightArrow,
  showPreviousArrow,
  showNextArrow,
}) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={bigImgModalVisible}
    >
      <Pressable 
        onPress={onPressBackDrop}
        style={{ 
          flex: 1,
          backgroundColor: `rgba(115, 115, 115, 0.8)`,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* < 화살표 */}
          <ArrowButton 
            iconName={"arrow-left"} 
            disabled={!showPreviousArrow} 
            onPress={onPressLeftArrow} 
          />

          {/* 이미지 */}
          <Pressable>
            <Image 
              source={{ uri: selectedImage?.uri }} 
              style={{ width: 300, height: 300 }}
              resizeMode='contain'
            />
          </Pressable>

          {/* > 화살표 */}
          <ArrowButton 
            iconName={"arrow-right"} 
            disabled={!showNextArrow} 
            onPress={onPressRightArrow} 
          />
        </View>
      </Pressable>
    </Modal>
  )
}

export default BigImgModal
