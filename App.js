import React from "react"
import {DefaultTheme, Provider as PaperProvider} from "react-native-paper"
import {StatusBar} from "react-native"
import {SafeAreaProvider} from "react-native-safe-area-context"
import {LoginScreen} from "./src/screens/AppScreen"



// デフォルトのテーマを変更可能
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FF7F50",
    accent: "yellow"
  }
}

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <LoginScreen />
      </PaperProvider>
    </SafeAreaProvider>
  )
}
