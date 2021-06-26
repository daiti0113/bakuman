import React, {useState, useContext} from "react"
import {Text} from "react-native"
import {Button, TextInput} from "react-native-paper"
import {API, Auth, graphqlOperation} from "aws-amplify"
import {createPlan} from "../graphql/mutations"
import {listPlans} from "../graphql/queries"
import {DatePicker} from "../components/DatePicker"
import {Checkbox} from "../components/Checkbox"
import {formatDate} from "../helpers/date"
import {PlanProvider, planStore, updateDraftPlan} from "../stores/planStore"
import {ScreenContainer} from "../components/ScreenContainer"

const formState = {
  deadline: "2021-02-28",
  startDate: "2021-02-01",
  pageCount: 16,
  process: [1, 2],
  uptime: [1, 2, 3, 4, 5, 6, 7],
  steps: [
    {
      id: 1,
      order: 1,
      label: "表紙",
      timePerPage: 10
    },
    {
      id: 2,
      order: 2,
      label: "プロット",
      timePerPage: 20
    }
  ]
}

// eslint-disable-next-line
const WelcomeScreenInner = ({navigation}) => {
  const {state: {draftPlan}} = useContext(planStore)
  const [plans, setPlans] = useState([])

  const fetchPlans = async () => {
    try {
      const user = await Auth.currentUserInfo()
      const planData = await API.graphql(graphqlOperation(listPlans, {owner: user.username}))
      const plans = planData.data.listPlans.items
      console.log(plans)
      setPlans(plans)
    } catch (err) {console.log("error fetching plans: ", err)}
  }

  const addPlan = async () => {
    try {
      const user = await Auth.currentUserInfo()
      await API.graphql(graphqlOperation(createPlan, {input: {deadline: formatDate(draftPlan.deadline), startDate: formatDate(draftPlan.startDate)}, owner: user.username}))
    } catch (err) {
      console.log("error creating plan:", err)
    }
  }
  
  return (
    <ScreenContainer>
      <Text>締切日</Text>
      <DatePicker date={draftPlan.deadline} onChangeDate={(date) => updateDraftPlan({deadline: date})} />
      <Text>作業開始日</Text>
      <DatePicker date={draftPlan.startDate} onChangeDate={(date) => updateDraftPlan({startDate: date})} />
      <Text>ページ数</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="number-pad" onChangeText={(pageCount) => updateDraftPlan({pageCount})} />
      <Text>作業工程</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} onChangeText={(label) => updateDraftPlan({steps: [{id: 1, order: 1, label}]})} />
      <Text>予想時間</Text>
      <Checkbox label="全体で" checked={true} />
      <Checkbox label="1ページにつき" checked={true} />
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(timePerPage) => updateDraftPlan({steps: [{...draftPlan.steps[0], timePerPage}]})} />
      <Text>作業可能時間</Text>
      <Text>月曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan({uptime: draftPlan.uptime.splice(0, 1, uptime)})} />
      <Text>火曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan({uptime: draftPlan.uptime.splice(1, 1, uptime)})} />
      <Text>水曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan({uptime: draftPlan.uptime.splice(2, 1, uptime)})} />
      <Text>木曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan({uptime: draftPlan.uptime.splice(3, 1, uptime)})} />
      <Text>金曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan({uptime: draftPlan.uptime.splice(4, 1, uptime)})} />
      <Text>土曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan({uptime: draftPlan.uptime.splice(5, 1, uptime)})} />
      <Text>日曜日</Text>
      <TextInput mode="contained" style={{height: 30, width: 100}} keyboardType="decimal-pad" onChangeText={(uptime) => updateDraftPlan({uptime: draftPlan.uptime.splice(6, 1, uptime)})} />
      <Button onPress={addPlan}>Add Plan</Button>
      <Button onPress={fetchPlans}>Fetch Plans</Button>
      {plans.length > 0
        ? plans.map(plan => <Text key={plan.id}>{plan.deadline}/{plan.pageCount}</Text>)
        : <Text>Loading...</Text>
      }
    </ScreenContainer>
  )
} // TODO: 入力フォーム作る

export const WelcomeScreen = () => <PlanProvider><WelcomeScreenInner /></PlanProvider>