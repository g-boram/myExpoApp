import React from 'react'
import { View } from 'react-native'
import ProjectTitle from '../shared/ProjectTitle'
import TodoCalendar from './TodoCalendar'

const TodoListStart = () => {
  return (
    <View>
      <ProjectTitle title='TodoList + Calender' />
      <TodoCalendar />
    </View>
  )
}

export default TodoListStart
