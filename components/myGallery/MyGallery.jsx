import React from 'react'
import { Button, Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useGallery } from './hook/use-gallery'
import MyDropDownPicker from './MyDropDownPicker';
import TextInputModal from './TextInputModal';

const width = Dimensions.get('screen').width;
const columnSize = width / 3;

const MyGallery = () => {
  const { 
    // images, 
    imagesWithAddButton, 
    pickImage, 
    deleteImage,
    selectedAlbum,
    modalVisible,
    openModal,
    closeModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    isDropdownopen,
    openDropDown,
    closeDropDown,
    albums,
    selectAlbum,
  } = useGallery();

  const onPressOpenGallery = () => {
    pickImage();
  }
  const onPressAddAlbum = () => {
    openModal()
  }

  const onSubmitEditing = () => {
    if (!albumTitle) return

    // 1. 앨범에 타이틀 추가
    addAlbum()
    // 2. 모달 닫기 & TextInput의 value 초기화
    closeModal()
    resetAlbumTitle()
  }

  const onPressBackdrop = () => {
    closeModal()
  }

  const onPressHeader = () => {
    if (isDropdownopen) {
      closeDropDown()
    } else {
      openDropDown()
    }
  }

  const onPressAlbum = (album) => {
    selectAlbum(album)
    closeDropDown();
  }

  const renderItem = ({ item: { id, uri }, index }) => {
    const onLongPress = () => deleteImage(id);
    if (id === -1) {
      return (
        <TouchableOpacity 
          onPress={onPressOpenGallery}
          style={{ 
            width: columnSize, 
            height: columnSize, 
            backgroundColor: "lightgrey", 
            justifyContent: "center",
            alignItems: "center",
          }} 
        >
          <Text style={{ fontWeight: "100", fontSize: 40, }}>+</Text>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity onLongPress={onLongPress}>
        <Image 
          source={{ uri }} 
          style={{ width: columnSize, height: columnSize }}
        />
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 앨범 DropDown, 앨범 추가 버튼 */}
      <MyDropDownPicker 
        isDropdownopen={isDropdownopen}
        onPressHeader={onPressHeader}
        selectedAlbum={selectedAlbum}
        onPressAddAlbum={onPressAddAlbum}
        albums={albums}
        onPressAlbum={onPressAlbum}
      />

      {/* 앨범을 추가하는 TextInputModal */}
      <TextInputModal 
        modalVisible={modalVisible}
        albumTitle={albumTitle}
        setAlbumTitle={setAlbumTitle}
        onSubmitEditing={onSubmitEditing}
        onPressBackdrop={onPressBackdrop}
      />

      {/* 이미지 리스트 */}
      <FlatList 
        data={imagesWithAddButton}
        renderItem={renderItem}
        numColumns={3}
        style={{ zIndex: -1 }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 300,
    maxHeight: 900,
    backgroundColor: '#fff',
  },
})

export default MyGallery
