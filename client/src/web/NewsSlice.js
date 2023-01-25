import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import webApi from "./webApi";
import WebService from "./webService";
export const fetchNews=createAsyncThunk('news/fetchNews',async(data)=>{
    let response = await WebService.getApi(webApi.LOAD_NEWS);
    if(response.data.status){
        return response.data.result;
    }
});

const slice = createSlice({
    name:"news",
    initialState:{
        value:{
            newsList:[],
            isNewsLoading:false,
            newsError:""
        }
    },
    reducers:{
        updateNews:(state,action)=>{
            state.value.newsList.push(action.payload)
        },
        deleteNews:(state,action)=>{
            state.value.newsList.splice(action.payload);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchNews.pending,(state,action)=>{
            state.value.isNewsLoading = true;
            state.value.newsError = ""
        })
        builder.addCase(fetchNews.fulfilled,(state,action)=>{
            state.value.isNewsLoading = false;
            state.value.newsList = action.payload;
            state.value.newsError = ""
        })
        builder.addCase(fetchNews.rejected,(state,action)=>{
            state.value.isNewsLoading = false;
            state.value.newsList = [];
            state.value.newsError = "Oops!.. something went wrong"
        })
    }
})
export const {updateNews,deleteNews} = slice.actions;
export default slice.reducer