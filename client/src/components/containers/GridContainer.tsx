import { props } from "../../types/JsxElementTypes"

export default function GridContainer({children}:props) {
  return (
    <div className="flex space-x-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
      {children}
    </div>
  )
}
