import axios from "axios"


  export const getBudgetData=async()=>{
    const res=await axios ("/Budget.json")
    return res.data
}
 
