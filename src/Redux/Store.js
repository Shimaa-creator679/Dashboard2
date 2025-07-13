import { configureStore } from '@reduxjs/toolkit'
import classicReducer from "../Redux/Classic/classicSlice"
import messagesReducer from "../Redux/mailBox/mailSlice"
import transReducer from "../Redux/trans/TransSliace"
import BudgetReducer from "../Redux/Budget/BudgetSlice"
 const store = configureStore({
  reducer: {
    classic: classicReducer,
    messageData: messagesReducer,
    transData:transReducer,
    BudgetData:BudgetReducer,
  }
})
export default store