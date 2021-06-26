import React from "react"
import {ScrollView, TouchableWithoutFeedback, Keyboard, StyleSheet} from "react-native"

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    backgroundColor: "#fff"
  }
})

export const ScreenContainer = ({children}) => 
  <DissmissKeyboard>
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {children}
    </ScrollView>
  </DissmissKeyboard>

const DissmissKeyboard = ({children}) =>
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
