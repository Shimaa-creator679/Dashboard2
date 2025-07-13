import axios from "axios"

 export const getTransData=async()=>{
    const res=  await axios("/trans.json")
    return res.data
}