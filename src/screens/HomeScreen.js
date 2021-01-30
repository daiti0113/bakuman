import React, {useState} from "react"
import {Text, View} from "react-native"
import {StyleSheet} from "react-native"
import {defaultStyle} from "../styles/defaultStyle"
import {Button} from "react-native-paper"
import {API, graphqlOperation} from "aws-amplify"
import {createPlan} from "../graphql/mutations"
import {listPlans} from "../graphql/queries"

const styles = StyleSheet.create(defaultStyle)

const formState = {
  id: 1,
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
const HomeScreenInner = ({navigation}) => {
  const [plans, setPlans] = useState([])

  const fetchPlans = async () => {
    try {
      const planData = await API.graphql(graphqlOperation(listPlans))
      const plans = planData.data.listPlans.items
      console.log(plans)
      setPlans(plans)
    } catch (err) {console.log("error fetching todos: ", err)}
  }

  const addPlan = async () => {
    try {
      const plan = {...formState}
      await API.graphql(graphqlOperation(createPlan, {input: plan}))
    } catch (err) {
      console.log("error creating todo:", err)
    }
  }
  
  return (
    <View style={styles.container}>
      <Text>ここはHomeです。</Text>
      <Button onPress={addPlan}>Add Plan</Button>
      <Button onPress={fetchPlans}>Fetch Plans</Button>
      <Text>期限：{plans.length > 0 ? plans[0].deadline : "Loading..."}</Text>
    </View>
  )
}

export const HomeScreen = HomeScreenInner