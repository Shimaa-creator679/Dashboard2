import axios from "axios"

export const getClassicData=async()=>{
    const res=await axios.get("/data.json")
    return res.data

}