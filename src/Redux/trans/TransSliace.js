
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { getTransData } from './transApi'

const initialState = {
transData:[],
loading:false,
error:null

}



 export const fetchTransData = createAsyncThunk(
  'Trans/fetchData',
  async () => {
    const response = await getTransData()
    return response
  },
)

export const transDataSlice = createSlice({
  name: 'transData',
  initialState,

  extraReducers: (builder) => {

   builder.addCase(fetchTransData.fulfilled, (state, action) => {
  state.transData = action.payload;
  state.loading = false;
});

    builder.addCase(fetchTransData.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(fetchTransData.pending, (state) => {
      state.loading = true
    })
  },

})
export default transDataSlice.reducer