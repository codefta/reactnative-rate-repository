import { Platform, StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import theme from "../theme";

import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    font: Platform.select({
      ios: theme.font.ios,
      android: theme.font.android,
      default: theme.font.default,
    }),
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/sign" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
