import { GETPRODUCTS } from "../actionType/actionTypeProducts"

const initialState = {
    products:[],
    msg:""
}

export const productreducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GETPRODUCTS:
    return { ...state, products:payload.allproducts,msg:payload.msg }

  default:
    return state
  }
}
