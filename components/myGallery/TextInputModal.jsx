import React from 'react'
import { Modal, TextInput, View, SafeAreaView, KeyboardAvoidingView, Platform, Pressable } from 'react-native'

const TextInputModal = ({ modalVisible, albumTitle, setAlbumTitle, onSubmitEditing, onPressBackdrop }) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Pressable onPress={onPressBackdrop} style={{ flex: 1 }}>
          <SafeAreaView style={{ width: "100%", position: "absolute", bottom: 0 }}>
            <TextInput 
              placeholder='앨범명을 입력해주세요'
              style={{ width: "100%", backgroundColor: "#eee", paddingHorizontal: 10, paddingVertical: 10 }}
              value={albumTitle}
              onChangeText={setAlbumTitle}
              onSubmitEditing={onSubmitEditing}
              autoFocus={true}
            />
          </SafeAreaView>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default TextInputModal
