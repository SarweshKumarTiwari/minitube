import { props } from "../types/JsxElementTypes";

export default function Button({children,className}:props) {
  return (
    <button type="button" className={"p-2 rounded-lg border border-gray-200 "+className}>
      {children}
    </button>
  )
}
