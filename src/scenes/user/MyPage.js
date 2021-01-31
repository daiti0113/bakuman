import React from "react"
import {View, Text, SafeAreaView} from "react-native"
import {Button} from "react-native-paper"
import {logout} from "../../stores/authStore"

export const MyPage = () => 
  <SafeAreaView>
    <View>
      <Text>ログアウト</Text>
      <Button
        icon="pencil-plus-outline"
        size={25}
        mode="outlined"
        onPress={logout}
      >
        投稿する
      </Button>
    </View>
  </SafeAreaView>