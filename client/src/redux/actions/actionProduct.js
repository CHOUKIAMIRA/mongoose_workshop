import axios from "axios"
import { GETPRODUCTS } from "../actionType/actionTypeProducts"
export const getProducts =() => async(dispatch)=>{
   try {
   const res=await axios.get("http://localhost:8000/api/product/get")
      dispatch({
        type:GETPRODUCTS,
        payload:res.data
      })
   } catch (error) {
    console.log(error)
   }
}
export const addProduct =(data) => async(dispatch)=>{
    try {
    const res=await axios.post("http://localhost:8000/api/product/add",data)
       dispatch(getProducts())
    } catch (error) {
     console.log(error)
    }
 }
 export const deleteproduct =(id) => async(dispatch)=>{
   try {
   const res=await axios.delete("http://localhost:8000/api/product/delete/"+id)
      dispatch(getProducts())
   } catch (error) {
    console.log(error)
   }
}