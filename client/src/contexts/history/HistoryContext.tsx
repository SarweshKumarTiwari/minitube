import {createContext} from 'react'
import videoTypes from '../../types/VideoTypes';

type history={
    historyData:videoTypes[]|null,
    clearAllHistory:()=>void,
    clearOneHistory:(index:number)=>void,
    updateHistory:(data:videoTypes)=>void,
}
const historyContext=createContext<history|null>(null)

export default historyContext;