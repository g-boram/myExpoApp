import React from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components/native'

type propsProfile = {
  uri: string,
  name: string,
  introduction: string,
  isMe: boolean,
}

const Container = styled.View`
  flex-direction: row;
`

const Profile = ({ uri, name, introduction, isMe }: propsProfile) => {
  const size = isMe ? 50 : 40;
  return (
    <Container>
      <Image source={{ uri }} style={{ width: size, height: size, borderRadius: size * 0.4 }}/>
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text style={{ fontWeight: isMe ? "bold": undefined, fontSize: isMe? 16 : 15 }}>{name}</Text>
        {
          !!introduction && (
            <View>
              <View style={{ height: isMe ? 6 : 2 }} />
              <Text style={{ fontSize: isMe? 12: 11, color: "grey" }}>{introduction}</Text>
            </View>
          )
        }
      </View>
    </Container>
  ) 
}

export default Profile
