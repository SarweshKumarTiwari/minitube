import {props} from "../../types/JsxElementTypes"
export default function Container({children}:props) {
  return (
    <div className="mt-2 p-2 w-full">
        {children}
    </div>
  )
}
