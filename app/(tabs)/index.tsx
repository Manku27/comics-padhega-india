import { Image, StyleSheet, Platform } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/splash.jpg")}
          style={styles.headerImg}
          resizeMode="cover"
        />
      }
    >
      <ThemedText type="title" style={styles.titleContainer}>
        Comics Padhega India !
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    textAlign: "center",
  },
  headerImg: {
    flex: 1,
    transform: [{ translateX: -330 }],
  },
});
