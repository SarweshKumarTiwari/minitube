import { createSlice } from "@reduxjs/toolkit";
import videoTypes from "../types/VideoTypes";

const initialState:{history:videoTypes[]}={
    history:[
        {
          v_cover: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
          channel: {_id:"fgh",c_name:"sample"},
          publised_time: "2 weeks ago",
          v_title: "Fun Video",
          videoId: "xyz",
          v_desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam blanditiis aspernatur cumque commodi neque est autem facere molestias esse ipsam sequi vel quis cupiditate vitae, deserunt numquam laborum veniam."
        },
        {
          v_cover: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
          channel: {_id:"fgh",c_name:"sample"},
          publised_time: "2 weeks ago",
          v_title: "Fun Video",
          videoId: "xyz",
          v_desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam blanditiis aspernatur cumque commodi neque est autem facere molestias esse ipsam sequi vel quis cupiditate vitae, deserunt numquam laborum veniam."
        }, {
          v_cover: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
          channel: {_id:"fgh",c_name:"sample"},
          publised_time: "2 weeks ago",
          v_title: "Fun Video",
          videoId: "xyz",
          v_desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam blanditiis aspernatur cumque commodi neque est autem facere molestias esse ipsam sequi vel quis cupiditate vitae, deserunt numquam laborum veniam."
        }
      ]
}
export const  historySlice=createSlice({
    name:"history",
    initialState,
    reducers:{
        clearAllHistory:(state)=>{
          state.history=[];
        },
        clearOneHistory:({history},{payload})=>{
          console.log(history)
            history.splice(payload.index,1);
        },
        updateHistory:({history},{payload})=>{
            history.push(payload);
        }
    }
})

export const {clearAllHistory,updateHistory,clearOneHistory}=historySlice.actions

export default historySlice.reducer