import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import webApi from './webApi';
import WebService from './webService';

export const fetchGallery=createAsyncThunk('gallery/fetchGallery',async(data)=>{
    let response = await WebService.getApi(webApi.LOAD_GALLERY);
    if(response.data.status){
        return response.data.result;
    }
});

const slice=createSlice({
    name:"gallery",
    initialState:{
        value:{
            gallerylist:[],
            isGalleryLoading:false,
            galleryError:""

        }
    },
    reducers:{
        updateGallery:(state,action)=>{
            state.value.gallerylist.push(action.payload);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchGallery.pending,(state,action)=>{
            state.value.isGalleryLoading = true;
        })
        builder.addCase(fetchGallery.fulfilled,(state,action)=>{
            state.value.isGalleryLoading = false;
            state.value.gallerylist = action.payload;
        })
        builder.addCase(fetchGallery.rejected,(state,action)=>{
            state.value.isGalleryLoading = false;
            state.value.gallerylist = [];
            state.value.galleryError = "Oops!.. something went wrong"
        })
    }
})
export const {updateGallery} = slice.actions
export default slice.reducer