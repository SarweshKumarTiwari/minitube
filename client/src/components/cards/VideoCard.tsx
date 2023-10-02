import { props } from '../../types/JsxElementTypes'

export default function VideoCard({children}:props) {
  return (
    <div className="relative p-2 flex group space-x-2 rounded-lg shadow-md 
    border-gray-200 border-t-[1px]">
        {children}
    </div>
  )
}
