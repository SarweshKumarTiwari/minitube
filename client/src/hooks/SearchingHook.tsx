import {SetStateAction, useEffect,useState} from 'react'
import videoTypes from '../types/VideoTypes'
import axios from 'axios'
type searchType={
    searchItem:string
    setLoading:React.Dispatch<SetStateAction<boolean>>
}
export default function SearchingHook({searchItem,setLoading}:searchType) {
    const [searchResults, setsearchResults] = useState<videoTypes[]|null>(null);

    const searchVideos=async ()=>{
        try {
            if (!searchItem.trim()) {
                return;
            }
            const result=await axios.get(`/videos/search/${searchItem.toLowerCase()}`);
            setLoading(true);
            setsearchResults(result.data.success);
            setLoading(false);
            console.log(searchItem);
          }
        catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
      //using toggler
      const timeStack=setTimeout(()=>searchVideos(),500)
      return ()=>clearTimeout(timeStack);
    }, [searchItem])
    
  return searchResults;
}
