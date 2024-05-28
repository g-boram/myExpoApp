import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import KakaoListStart from '@/components/kakao/KakaoListStart';
import CalculatorStart from '@/components/calculator/CalculatorStart';
import TodoListStart from '@/components/todoList/TodoListStart';
import MyGalleryStart from '@/components/myGallery/MyGalleryStart';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['right', 'left', 'top']} style={styles.container}>
        <ScrollView>
          <KakaoListStart />
          <CalculatorStart />
          <TodoListStart />
          <MyGalleryStart />
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
