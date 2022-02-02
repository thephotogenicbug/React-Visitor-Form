import axios from "axios"
import { VISITOR_CREATE_FAIL, VISITOR_CREATE_REQUEST, VISITOR_CREATE_SUCCESS } from "../constants/visitorConstants"

export const createVisitorAction = (name, mobile, email, purpose, employee, pic) => async (dispatch, getState) =>{
    try {
        dispatch({
            type:VISITOR_CREATE_REQUEST
        })
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/visitor/new`,
        {name, mobile, email, purpose, employee, pic}
      );  
      dispatch({
          type:VISITOR_CREATE_SUCCESS,
          payload:data,
      })
    } catch (error) {
        dispatch({
          type: VISITOR_CREATE_FAIL,
          payload: error.response.data.message,
        });
    }
}