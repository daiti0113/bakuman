import React, {createContext, useReducer} from "react"
import {createReducer} from "../helpers/store"

const initialState = {
  draftPlan: {
    deadline: new Date,
    startDate: new Date,
    pageCount: 0,
    process: [],
    uptime: [0 * 7],
    steps: []
  }  
}

// Define Store
const planStore = createContext(initialState)

// Define Types
const UPDATE_DRAFT_PLAN = "UPDATE_DRAFT_PLAN"


// Define ActionCreator
export const updateDraftPlan = async (dispatch, data) => {
  dispatch({type: UPDATE_DRAFT_PLAN, payload: data})
}


// Defin Provider
const {Provider} = planStore
const PlanProvider = ({children}) => {
  // Define Reducer
  const [state, dispatch] = useReducer(createReducer(initialState, {
    [UPDATE_DRAFT_PLAN]: (state, {payload}) => ({...state, draftPlan: {...state.draftPlan, ...payload}})
  }), initialState)
  console.log("State is updated:", state)
  return <Provider value={{state, dispatch}}>{children}</Provider>
}

export {planStore, PlanProvider}