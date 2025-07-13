

import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getClassicData } from './classicApi'

const initialState = {
classicData:[],
loading:false,
error:null

}



 export const fetchClassicData = createAsyncThunk(
  'classic/fetchData',
  async () => {
    const response = await getClassicData()
    return response
  },
)

export const classicDataSlice = createSlice({
  name: 'classicData',
  initialState,

  extraReducers: (builder) => {

   builder.addCase(fetchClassicData.fulfilled, (state, action) => {
  state.classicData = action.payload;
  state.loading = false;
});

    builder.addCase(fetchClassicData.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(fetchClassicData.pending, (state) => {
      state.loading = true
    })
  },

})



export default classicDataSlice.reducer