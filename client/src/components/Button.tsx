import { props } from "../types/JsxElementTypes";

interface buttonType extends props{
  onClick?:()=>void;
}
export default function Button({children,className,onClick}:buttonType) {
  return (
    <button type="button" className={"p-2 rounded-lg border border-gray-200 "+className} onClick={onClick} >
      {children}
    </button>
  )
}
