import { useEffect, useState } from "react";
import { props } from "../types/JsxElementTypes";
interface alerttype extends props{
    callback:()=>void;
    state:"success"|"error"|"info"
}
export default function Alerts(props:alerttype) {
    const [color, setcolor] = useState({
        color:'',
        border:"",
        shadow:"",
        fill:""
    })
    useEffect(() => {
      switch (props.state) {
        case "success":
            setcolor({
                color:"text-green-400",
                border:"border-green-200",
                shadow:"shadow-green-200",
                fill:"fill-green-300"
            })
            break;
        case "error":
            setcolor({
                color:"text-red-400",
                border:"border-red-200",
                shadow:"shadow-red-200",
                fill:"fill-red-300"
            })
            break;
        case "info":
            setcolor(
                {color:"text-yellow-400",
                border:"border-yellow-200",
                shadow:"shadow-yellow-200",
                fill:"fill-yellow-300"}
            )
            break;
      }
    }, [props.state])
    return (
        <div className={`absolute z-[2] top-14 left-1 shadow-md ${color.shadow} w-[98%] h-[45%]  p-2 border-[1px] ${color.border} bg-[white] rounded-lg`} >
            <div className="relative w-full">
                <button className="absolute p-1  top-0 right-0" onClick={()=>props.callback()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className={`${color.fill}`} viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </button>
            </div>
            <div className={`${color.color}${props.className}`}>
                <h2 className={`${color.color}`}>{props.state.toUpperCase()} :</h2>
                {props.children}
            </div>
        </div>
    )
}
