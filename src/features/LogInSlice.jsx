
//LogInSlice.jsx
// استدعاء createSlice من Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// إنشاء Slice باستخدام createSlice
export const loginSlice = createSlice({
  name: 'search', // اسم الـSlice الذي سيتم استخدامه في المتجر
  initialState:{
  query:'',
  result:[]
  }, // حالة الابتدائية للـSlice
  reducers: {
    setQuery(state,action){
      state.query=action.payload;
    },
    setResults(state,action){
      state.result=action.payload
    }
  },
    
});
// يتم إنشاء مولدات الأحداث (action creators) تلقائيًا لكل وظيفة محددة في reducers
export const { setQuery, setResults } = loginSlice.actions;
// تصدير الـreducer الخاص بالـSlice
export default loginSlice.reducer;