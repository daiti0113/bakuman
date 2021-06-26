import React from "react"
import {Text, View} from "react-native"
import {Checkbox as PaperCheckbox} from "react-native-paper"

export const Checkbox = ({label, checked=false, onPress}) => {
  return <View style={{flexDirection: "row", alignItems: "center"}}>
    <View style={{backgroundColor: "#ddd", borderRadius: 5}}>
      <PaperCheckbox
        status={checked ? "checked" : "unchecked"}
        onPress={onPress}
        color="#000"
      />
    </View>
    <Text style={{marginLeft: 10}}>{label}</Text>
  </View>


}