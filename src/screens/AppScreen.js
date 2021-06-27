import React, {useContext} from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {TabScreen} from "./TabScreen"
import {NavigationContainer} from "@react-navigation/native"
import {WelcomeScreen} from "./WelcomeScreen"
import {StoreProvider, store} from "../store"

const Stack = createStackNavigator()

const navigatorProps = ({
  initialRouteName: "Login",
  screenOptions: {
    headerShown: false
  }
})

const LoginScreenInner = () => {
  // TODO: isFirstLaunchではなく、plansがあるかどうかで判断するように後で変更する
  const {state: {isFirstLaunch}} = useContext(store)

  return (
    <NavigationContainer>
      <Stack.Navigator {...navigatorProps}>
        {isFirstLaunch
          ? <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          : <Stack.Screen name="TabScreen" component={TabScreen} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const LoginScreen = () => <StoreProvider><LoginScreenInner /></StoreProvider>