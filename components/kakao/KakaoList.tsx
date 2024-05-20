import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from './Header'
import Profile from './Profile'
import { friendProfiles, myProfile } from '../../data/kakaoData'
import Margin from '../shared/Margin'
import Division from '../shared/Division'
import FriendSection from './FriendSection'
import FriendList from './FriendList'
import TabBar from './TabBar'
import ProjectTitle from '../shared/ProjectTitle'


const KakaoList = () => {
  const [isOpened, setIsOpened] = useState(true)
  const [selectedTabIdx, setSelectedTabIdx] = useState(0)

  const onPressArrow = () => {
    setIsOpened(!isOpened)
  }

  const ItemSeparatorComponent = () => <Margin height={13} />

  const renderItem = ({ item, index }: any) => (
    <View key={index}>
    <Profile
      uri={item.uri}
      name={item.name} 
      introduction={item.introduction}
      isMe={false}
    />
  </View>
  )
  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />
      <Margin height={10}/>
      <Profile 
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />
        <Margin height={15}/>
        <Division />
        <Margin height={15}/>
      <FriendSection 
        friendLenth={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
      <Margin height={5} />
    </View>
  )

  const ListFooterComponent = () => <Margin height={10} />

  return (
    <>
      <ProjectTitle title='Kakao List'/>
      <View style={styles.container}>
        <FlatList
          data={ isOpened ? friendProfiles : []} // 사용할 데이터
          stickyHeaderIndices={[0]} // 헤더 고정여부 배열형태, 첫번째 헤더 고정
          contentContainerStyle={{ paddingHorizontal: 15 }} // 전체 컨테이너에 줄 스타일 속성
          // keyExtractor={(item, index) => index} 기본제공 키 인덱스 사용가능
          ItemSeparatorComponent={ItemSeparatorComponent} // 아이템 사이에 적용할 것
          renderItem={renderItem} // 렌더할 아이템 (map을 사용하는것처럼 사용하지만 오브젝트로 감싸오는것 주의)
          ListHeaderComponent={ListHeaderComponent} // 헤더 부분
          ListFooterComponent={ListFooterComponent} // 푸터 부분
          showsVerticalScrollIndicator={false} // 스크롤 보여짐 여부
        />
        {/* 바닥 고정을 위해 따로 빼기 */}
        <TabBar 
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 10
  }
})

export default KakaoList
