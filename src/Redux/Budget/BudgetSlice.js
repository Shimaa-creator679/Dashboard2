

import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { getBudgetData } from './BudgetApi'


const initialState = {
BudgetData:[],
loading:false,
error:null

}



 export const fetchBudgetData = createAsyncThunk(
  'Budget/fetchData',
  async () => {
    const response = await getBudgetData()
    return response
  },
)

export const BudgetDataSlice = createSlice({
  name: 'BudgetData',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.BudgetData.push(action.payload)
    },
  setBudgetFromLocal: (state, action) => {
      state.BudgetData = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {

   builder.addCase(fetchBudgetData.fulfilled, (state, action) => {
  state.BudgetData = action.payload;
  localStorage.setItem("Budget", JSON.stringify(state.BudgetData))
  state.loading = false;
});

    builder.addCase(fetchBudgetData.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(fetchBudgetData.pending, (state) => {
      state.loading = true
    })
  },

})

export const {addItem,setBudgetFromLocal}=BudgetDataSlice.actions

export default BudgetDataSlice.reducer