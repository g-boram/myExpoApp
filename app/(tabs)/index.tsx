import { ScrollView, StyleSheet } from 'react-native';

import KakaoList from '@/components/kakao/KakaoList';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Calculator from '@/components/calculator/Calculator';
import TodoList from '@/components/todoList/TodoList';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['right', 'left', 'top']} style={styles.container}>
        <ScrollView>
          <KakaoList />
          <Calculator />
          <TodoList />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
