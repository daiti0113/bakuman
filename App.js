import React from "react"
import {DefaultTheme, Provider as PaperProvider} from "react-native-paper"
import {StatusBar} from "react-native"
import {SafeAreaProvider} from "react-native-safe-area-context"
import {LoginScreen} from "./src/screens/LoginScreen"
import Amplify from "aws-amplify"
import config from "./src/aws-exports"
import {withAuthenticator} from "aws-amplify-react-native"

Amplify.configure(config)


// デフォルトのテーマを変更可能
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FF7F50",
    accent: "yellow"
  }
}

const App = () => {

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <LoginScreen />
      </PaperProvider>
    </SafeAreaProvider>
  )
}

export default withAuthenticator(App)