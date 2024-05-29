import { useRef, useEffect } from "react";
import { View } from "react-native";
import LottieView from 'lottie-react-native';

export default () => {
  // const ref = useRef(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     ref.current?.play();
  //   }, 2000);
  // }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        // ref={ref}
        autoPlay
        style={{ width: 300 }}
        source={require('../../assets/loading.json')} // https://lottiefiles.com/animations/heart-fly-transparent-bg-4E1YKrHWvy?from=search
      />
    </View>
  );
};