import {useRef,useEffect,useCallback} from "react"
export default function InfiniteScrollHook() {
    const divReference = useRef<HTMLDivElement|null>(null);
    const observerCallback=useCallback((entries:IntersectionObserverEntry[])=>{
        console.log(entries[0].isIntersecting);
    },[])
    useEffect(() => {
      const rf=divReference.current
      const observeIntersection=new IntersectionObserver(observerCallback,{threshold:1.0})
      if(rf) observeIntersection.observe(rf);
    
      return () => {
        if(rf) observeIntersection.observe(rf);
      }
    }, [observerCallback])

    return {divReference};
    
}
