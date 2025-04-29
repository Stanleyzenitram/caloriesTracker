import { act } from "react"
import { Activity } from "../types"

export type ActivityActions = 
{type: 'save-activity', payload: {newActivity: Activity}}

type ActivityState = {
  activities : Activity[],
}

export const initialState : ActivityState= {
  activities: [],
}

export const activityReducer = (
  state: ActivityState = initialState,
  actions: ActivityActions
) =>{
  if(actions.type === 'save-activity'){
    //este codigo maneja la logica para actualizar el estado

    return{
      ...state,
      activities: [...state.activities, actions.payload.newActivity]
    }
  }

  return state
}