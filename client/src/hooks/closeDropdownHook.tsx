import { useRef, useEffect,MutableRefObject, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, SetStateAction} from "react";
function useOutsideAlerter(ref:MutableRefObject<null|HTMLButtonElement>,data:{drop:boolean,setDrop:React.Dispatch<SetStateAction<boolean>>}) {
  useEffect(() => {
    function handleClickOutside(event:EventTarget|null) {
      if (ref.current && !ref.current.contains(event as HTMLElement)) {
        data.setDrop(!data)
      }
    }
    console.log(Date.now())
    document.addEventListener("click", (e)=>handleClickOutside(e.target));
    return () => {
      document.removeEventListener("mousedown", (e)=>handleClickOutside(e.target));
    };
  }, [ref,data]);
}
export default function OutsideAlerter(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined,data:{drop:boolean,setDrop:React.Dispatch<SetStateAction<boolean>>} }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef,{drop:props.data.drop,setDrop:props.data.setDrop});

  return <div ref={wrapperRef}>{props.children}</div>;
}