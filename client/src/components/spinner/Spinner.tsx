import "./spinner.css"

export default function Spinner({className}:{className?:string}) {
  return (
    <span className={"loader "+className}></span>
  )
}
