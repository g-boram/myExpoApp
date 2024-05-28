import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';

const headerHeigth = 50;

const MyDropDownPicker = ({ 
  onPressHeader, 
  selectedAlbum, 
  onPressAddAlbum, 
  isDropdownopen, 
  albums, 
  onPressAlbum 
  }) => {
  
  return (
    <View>
      <TouchableOpacity 
        activeOpacity={1}
        onPress={onPressHeader}
        style={{ 
          height: headerHeigth, 
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'row',
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{selectedAlbum.title}</Text>
        <SimpleLineIcons 
          name={isDropdownopen ? "arrow-down" : "arrow-up"}
          size={12}
          color="black"
          style={{ marginLeft: 8 }}
        />

        <TouchableOpacity 
          onPress={onPressAddAlbum}
          style={{ 
            position: "absolute",
            right: 0,
            height: headerHeigth,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 12 }}>앨범추가</Text>
        </TouchableOpacity>
        
      </TouchableOpacity>
        {isDropdownopen && (
          <View 
            style={{ 
              position: "absolute",
              top: headerHeigth,
              width: "100%", 
              minHeight: 100, 
              backgroundColor: '#eee',
              borderBottomColor: "#303030",
              borderBottomWidth: 0.5, 
            }}
          >
            {albums.map((album, index) => {
              const isSelectedAlbum = album.id === selectedAlbum.id
              return (
                <TouchableOpacity 
                  onPress={() => onPressAlbum(album)}
                  key={`album-${index}`}
                  style={{
                    paddingVertical: 10,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ fontWeight: isSelectedAlbum ? 'bold' : undefined }}>{album.title}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        )}
    </View>
  )
}

export default MyDropDownPicker
