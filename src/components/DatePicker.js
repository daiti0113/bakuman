import React from "react"
import DateTimePicker from "@react-native-community/datetimepicker"

export const DatePicker = ({date, onChangeDate}) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    onChangeDate(currentDate)
  }

  return <DateTimePicker
    testID="dateTimePicker"
    value={date}
    mode="date"
    is24Hour={true}
    display="default"
    onChange={onChange}
    style={{width: 100}}
  />

}