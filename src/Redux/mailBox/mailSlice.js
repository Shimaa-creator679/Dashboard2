import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { getmessagesData } from './mailAPi'

const initialState = {
messagesData:[],
loading:false,
error:null

}



 export const fetchmessagesData = createAsyncThunk(
  'messages/fetchData',
  async () => {
    const response = await getmessagesData()
    return response
  },
)

export const messageDataSlice = createSlice({
  name: 'messagesData',
  initialState,

  extraReducers: (builder) => {

   builder.addCase(fetchmessagesData.fulfilled, (state, action) => {
  state.messagesData = action.payload;
  state.loading = false;
});

    builder.addCase(fetchmessagesData.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(fetchmessagesData.pending, (state) => {
      state.loading = true
    })
  },

})



export default messageDataSlice.reducer