import Search from "@/components/SearchBar";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView>
        <Search />
      </ThemedView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  titleContainer: {
    textAlign: "center",
  },
});
