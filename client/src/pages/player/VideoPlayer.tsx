import { useLocation } from "react-router-dom";
export default function VideoPlayer() {
  const { state } = useLocation();
  return (
    <>
      <hr />
      <div className="border-t-[1px] border-gray-200 m-auto mt-2  w-full md:w-[65%] lg:w-[50%]">
        <div className="m-auto w-[100%] = border-[1px] border-gray-400 rounded-lg shadow-md">
          <video controls className="w-full h-full rounded-lg"  >
            <source src="http://localhost:3000/Videos/flower.webm" type="video/webm" />
            <source src="http://localhost:3000/Videos/flower.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mt-2 mx-2 p-1">
          <h3 className="text-xl text-gray-800">
            {state.title}
          </h3>
          <div className="flex justify-between">
            <div className="flex text-gray-600 text-sm items-center space-x-1">
              <p>{state.channel}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="fill-gray-600" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </div>
            <p>{state.publised_time}</p>
          </div>
          <div className="text-sm text-gray-500">
            {state.description}
          </div>
        </div>
      </div>
    </>
  )
}
