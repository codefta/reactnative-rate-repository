import { Pressable, StyleSheet, Text } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  field: {
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: "auto",
    borderColor: theme.backgroundColor.secondary,
  },
  buttonSignIn: {
    backgroundColor: theme.backgroundColor.primary,
    padding: 10,
    margin: 10,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.field}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={styles.field}
      />
      <Pressable onPress={onSubmit} style={styles.buttonSignIn}>
        <Text style={{ textAlign: "center", color: theme.textColor.primary }}>
          Sign In
        </Text>
      </Pressable>
    </>
  );
};

export default SignInForm;
