import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import KakaoListStart from '@/components/kakao/KakaoListStart';
import CalculatorStart from '@/components/calculator/CalculatorStart';
import TodoListStart from '@/components/todoList/TodoListStart';
import MyGalleryStart from '@/components/myGallery/MyGalleryStart';
import KakaoBusStart from '@/components/kakaoBus/KakaoBusStart';
import TranslationAppStart from '@/components/translationApp/TranslationAppStart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link } from 'expo-router';




import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';

import Button from './Button';
import { useCookie } from './use-cookie';
import { useTranslation } from './use-translation';
import LoadingView from './LoadingView';
import { getLocales } from 'expo-localization';


const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();
const deviceLanguage = getLocales()[0].languageCode

export default function HomeScreen() {

  const { t, locale, setLocale, format } = useTranslation();
  const { cookieKey } = useCookie();
  const [fontsLoaded] = useFonts({
    'RIDIBatang': require('./RIDIBatang.otf'), 
  });

  const [isLoaded, setIsLoaded] = useState(false);

  const y = new Date().getFullYear();
  const m = new Date().getMonth() + 1; // 0~11
  const d = new Date().getDate();
  const todayText = format(t('today_is'), y, m, d);

  const locales = [
    "ko",
    "en",
    "ja",
    "zh",
    "es",
  ];

  useEffect(() => {
    if (cookieKey !== "") {
      setIsLoaded(true);
    }
  }, [cookieKey]);
  useEffect(() => {
    if (locale !== null && fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [locale, fontsLoaded]);

  if (!isLoaded) return <LoadingView />;


  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Main" component={TranslationAppStart} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <SafeAreaProvider>
    //   <SafeAreaView edges={['right', 'left', 'top']} style={styles.container}>
    //     <TranslationAppStart />
    //     <Link href="/page/PageTest">Test</Link>
    //     {/* <ScrollView> 
    //       <KakaoListStart />
    //       <CalculatorStart />
    //       <TodoListStart />
    //       <MyGalleryStart />
    //       <KakaoBusStart />
    //       <TranslationAppStart />
    //     </ScrollView> */}

    //   </SafeAreaView>
    // </SafeAreaProvider>


    <SafeAreaProvider>
      <SafeAreaView edges={['right', 'left', 'top']} style={styles.container}>
      <View style={styles.container}>
      <LottieView
        autoPlay={false}
        source={require('./background.json')}
        resizeMode="cover"
        style={{
          position: "absolute",
          zIndex: -1,
        }}
      />

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <Text style={styles.todayText}>{todayText}</Text>
          <Text style={styles.cookieText}>{t(cookieKey)}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.buttonsContainer}>
            {locales.map(item => (
              <Button 
                key={item}
                onPress={() => setLocale(item)}
                isSelected={locale === item}
                text={item.toUpperCase()}
              />
            ))}
          </View>
        </View>
      </SafeAreaView>
    </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   }
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 300,
    backgroundColor: 'pink'
  },
  topContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  todayText: {
    fontFamily: "RIDIBatang",
    position: "absolute",
    top: 70,
    fontSize: 13,
    color: "#8b658f",
  },
  cookieText: {
    fontFamily: "RIDIBatang",
    fontSize: 22,
    color: "#372538",
    textAlign: "center",
    marginHorizontal: 30,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 25,
  },
});
