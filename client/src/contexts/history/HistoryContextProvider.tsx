import { useState } from "react"
import { props } from "../../types/JsxElementTypes"
import historyContext from "./HistoryContext"
import videoTypes from "../../types/VideoTypes"

export default function HistoryContextProvider({children}:props) {
    const [historyData, setfirst] = useState<videoTypes[]>([
        {
          image: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
          channel: "Any channel",
          publised_time: "2 weeks ago",
          title: "Fun Video",
          videoId: "xyz",
          description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam blanditiis aspernatur cumque commodi neque est autem facere molestias esse ipsam sequi vel quis cupiditate vitae, deserunt numquam laborum veniam."
        },
        {
          image: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
          channel: "Any channel",
          publised_time: "2 weeks ago",
          title: "Fun Video",
          videoId: "xyz",
          description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam blanditiis aspernatur cumque commodi neque est autem facere molestias esse ipsam sequi vel quis cupiditate vitae, deserunt numquam laborum veniam."
        }, {
          image: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
          channel: "Any channel",
          publised_time: "2 weeks ago",
          title: "Fun Video",
          videoId: "xyz",
          description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam blanditiis aspernatur cumque commodi neque est autem facere molestias esse ipsam sequi vel quis cupiditate vitae, deserunt numquam laborum veniam."
        }
      ])
    
    function clearAllHistory() {
        setfirst([]);
    }

    function updateHistory(data:videoTypes){
        const hist=[...historyData]
        hist.push(data)
        setfirst(hist);
    }

    function clearOneHistory(index:number) {
        const hist=[...historyData]
        hist.splice(index,1);
        setfirst(hist);
    }
  return (
    <historyContext.Provider 
       value={{ clearAllHistory,clearOneHistory,historyData,updateHistory}} 
    >
        {children}
    </historyContext.Provider>
  )
}
