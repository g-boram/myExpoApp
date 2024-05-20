import React from 'react'
import { ScrollView, View } from 'react-native'
import Margin from '../shared/Margin'
import Profile from './Profile'

const FriendList = (props: any) => {
  /**
   * Case 1. 삼항연산자
   */
  // return props.isOpened ? (
  //   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
  //     {props.data.map((item, index) => (
  //       <View key={index}>
  //         <Profile
  //           uri={item.uri}
  //           name={item.name} 
  //           introduction={item.introduction}
  //         />
  //         <Margin height={13} />
  //       </View>
  //     )
  //     )}
  //   </ScrollView>
  // ) : null;

  /**
   * Case 2. if문으로 먼저 예외처리
   */
  // if (!props.isOpened) return null;
  // return (
  //   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
  //     {props.data.map((item, index) => (
  //       <View key={index}>
  //         <Profile
  //           uri={item.uri}
  //           name={item.name} 
  //           introduction={item.introduction}
  //         />
  //         <Margin height={13} />
  //       </View>
  //     )
  //     )}
  //   </ScrollView>
  // )

  /**
   * Case 3. && 이용
   */
  return props.isOpened && (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.data.map((item: any, index: number) => (
        <View key={index}>
          {/* <Profile
            uri={item.uri}
            name={item.name} 
            introduction={item.introduction}
          /> */}
          <Margin height={13} />
        </View>
      )
      )}
    </ScrollView>
  )
}

export default FriendList
