import { PublisherLogo } from "@/types";
import { Image, StyleSheet, View } from "react-native";

interface Props {
  type: PublisherLogo;
}

const HomeItem = ({ type }: Props) => {
  switch (type) {
    case "DC":
      return (
        <View style={styles.container}>
          <Image style={styles.dcImage} source={require("@/assets/images/DC_Comics_logo.png")} />
        </View>
      );
    case "Marvel":
      return (
        <View style={styles.container}>
          <Image
            style={styles.marvelImage}
            source={require("@/assets/images/Marvel_Logo.png")}
            resizeMode="contain"
          />
        </View>
      );
  }
};

export default HomeItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginVertical: 4,
  },
  dcImage: {
    width: 150,
    height: 150,
  },
  marvelImage: {
    width: 200,
    height: 200,
  },
});
