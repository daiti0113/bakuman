import React, {useState, useContext} from "react"
import {Text} from "react-native"
import {Button, TextInput} from "react-native-paper"
import {DatePicker} from "../components/DatePicker"
import {Checkbox} from "../components/Checkbox"
import {store, updateDraftPlan} from "../store"
import {ScreenContainer} from "../components/ScreenContainer"
import {getData, saveData} from "../helpers/storage"


// eslint-disable-next-line
export const WelcomeScreen = ({navigation}) => {
  const {state: {draftPlan}, dispatch} = useContext(store)
  const [plans, setPlans] = useState([])

  const fetchPlans = async () => {
    const plan = await getData("plan")
    setPlans([plan])
  }

  const addPlan = async () => await saveData("plan", draftPlan)

  return (
    <ScreenContainer>
      <Text>締切日</Text>
      <DatePicker date={draftPlan.deadline} onChangeDate={(date) => updateDraftPlan(dispatch, {deadline: date})} />
      <Text>作業開始日</Text>
      <DatePicker date={draftPlan.startDate} onChangeDate={(date) => updateDraftPlan(dispatch, {startDate: date})} />
      <Text>ページ数</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="number-pad" onChangeText={(pageCount) => updateDraftPlan(dispatch, {pageCount})} />
      <Text>作業工程</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} onChangeText={(label) => updateDraftPlan(dispatch, {steps: [{id: 1, order: 1, label}]})} />
      <Text>予想時間</Text>
      <Checkbox label="全体で" checked={true} />
      <Checkbox label="1ページにつき" checked={true} />
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(timePerPage) => updateDraftPlan(dispatch, {steps: [{...draftPlan.steps[0], timePerPage}]})} />
      <Text>作業可能時間</Text>
      <Text>月曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan(dispatch, {uptime: draftPlan.uptime.splice(0, 1, uptime)})} />
      <Text>火曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan(dispatch, {uptime: draftPlan.uptime.splice(1, 1, uptime)})} />
      <Text>水曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan(dispatch, {uptime: draftPlan.uptime.splice(2, 1, uptime)})} />
      <Text>木曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan(dispatch, {uptime: draftPlan.uptime.splice(3, 1, uptime)})} />
      <Text>金曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan(dispatch, {uptime: draftPlan.uptime.splice(4, 1, uptime)})} />
      <Text>土曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan(dispatch, {uptime: draftPlan.uptime.splice(5, 1, uptime)})} />
      <Text>日曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan(dispatch, {uptime: draftPlan.uptime.splice(6, 1, uptime)})} />
      <Button onPress={addPlan}>Add Plan</Button>
      <Button onPress={fetchPlans}>Fetch Plans</Button>
      {plans.length > 0
        ? plans.map(plan => <Text key={plan.id}>{plan.deadline}/{plan.pageCount}</Text>)
        : <Text>Loading...</Text>
      }
    </ScreenContainer>
  )
}
