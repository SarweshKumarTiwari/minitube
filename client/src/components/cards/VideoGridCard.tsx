import videoTypes from '../../types/VideoTypes'

type data={
    data:videoTypes,
    point?:React.ForwardedRef<HTMLDivElement|null>
    className?:string
}
export default function VideoGridCard({data,point}:data) {
  return (
    <div className="p-1 fex flex-col space-y-1" ref={point}>
        <img src={data.v_cover} alt="gv" className="rounded-lg w-full h-[10rem] group-hover:blur-sm" />
          <div className="p-4">
            <h3 className="text-md text-bold">{data.v_title}</h3>
            <div className="flex justify-between">
              <div className="flex text-gray-600 text-sm items-center space-x-1">
                <p>{data.channel.c_name}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="fill-gray-600" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <p>{data.publised_time}</p>
            </div>
          </div>
    </div>
  )
}
