import axios from "axios"

export const getmessagesData=async()=>{
    const res=await axios.get("/messages.json")
    return res.data

}