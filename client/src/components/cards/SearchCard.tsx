import { props } from "../../types/JsxElementTypes";


export default function SearchCard({children}:props) {
  return (
    <div className="md:w-1/4 ">
        {children}
    </div>
  )
}
