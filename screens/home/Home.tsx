import { Image, StyleSheet, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import HomeItem from "./HomeItem";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/my-splash.jpg")}
          style={styles.headerImg}
          resizeMode="cover"
        />
      }
    >
      <ThemedView>
        <ThemedText type="title" style={styles.titleContainer}>
          Comics Padhega India !
        </ThemedText>
        <View style={styles.listContainer}>
          <ThemedText type="headers" style={styles.titleContainer}>
            Explore curated lists
          </ThemedText>
          <HomeItem type="DC" />
          <HomeItem type="Marvel" />
        </View>
      </ThemedView>
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
  listContainer: {
    marginTop: 12,
  },
});
