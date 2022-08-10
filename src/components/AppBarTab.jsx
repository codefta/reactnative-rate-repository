import { Pressable, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";

const AppBarTab = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Link to="/">
          <Text style={[styles.text, styles.repositories]}>Repositories</Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link to="/sign">
          <Text style={[styles.text, styles.signInTab]}>Sign in</Text>
        </Link>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.black,
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: theme.textColor.primary,
  },
  repositories: {
    marginLeft: 10,
  },
  signInTab: {
    marginLeft: 50,
  },
});

export default AppBarTab;
