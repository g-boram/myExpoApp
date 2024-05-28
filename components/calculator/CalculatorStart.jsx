import React, { useState } from 'react'
import { View } from 'react-native'
import ProjectTitle from '../shared/ProjectTitle'
import CalculatorUI from './CalculatorUI'

const CalculatorStart = () => {
  const [input, setInput] = useState(0) // 입력값
  const [currentOperator, setCurrentOperator] = useState(null) // 선택된 연산자
  const [result, setResult] = useState(null) // 두번째 값
  const [tempInput, setTempInput] = useState(null) // 전 입력값 저장
  const [tempOperator, setTempOperator] = useState(null) // 전 연산자 저장

  return (
    <View>
      <ProjectTitle title='Calculator' />
      <CalculatorUI />
    </View>
  )
}

export default CalculatorStart
