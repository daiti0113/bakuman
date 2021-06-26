import React from "react"
import {View, TouchableWithoutFeedback, Keyboard, StyleSheet} from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

export const ScreenContainer = ({children}) => 
  <DissmissKeyboard>
    <View style={styles.container}>
      {children}
    </View>
  </DissmissKeyboard>

const DissmissKeyboard = ({children}) =>
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
