import { props } from '../../types/JsxElementTypes'

export default function SubNavBar({children,className}:props) {
  return (
    <div className={"p-2 mx-4 border-t-[1px] border-gray-200 md:w-full flex space-x-4 overflow-y-scroll "+className}>
        {children}
    </div>
  )
}
