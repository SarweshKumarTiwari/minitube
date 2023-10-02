import { props } from "../../types/JsxElementTypes";

export default function ListContainers({children,className}:props) {
  return (
    <div className={"flex flex-col space-y-2 m-1 w-full md:m-auto md:w-[85%] lg:w-[65%]"+className}>
      {children}
    </div>
  )
}
