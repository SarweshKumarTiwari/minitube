export default function VideoPlayer() {
  return (
    <>
    <hr />
    <div className="border-t-[1px] border-gray-200 m-auto mt-2  w-full md:w-[65%] lg:w-[50%]">
      <div className="m-auto w-[100%] = border-[1px] border-gray-400 rounded-lg shadow-md">
        <video controls className="w-full h-full rounded-lg" >
          <source src="http://localhost:3000/Videos/flower.webm" type="video/webm" />
          <source src="http://localhost:3000/Videos/flower.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mt-2 mx-2 p-1">
        <h3 className="text-xl text-gray-800">
          This i a basic ghgdb xgvghvz vghv
        </h3>
      </div>
    </div>
    </>
  )
}
