import { useForm, SubmitHandler } from "react-hook-form";
import Container from "../../components/containers/Container"
type InputTypes = {
  video: FileList
  title: string
  description: string
  channel: string
}
export default function UploadVideo() {
  const data = {
    name: "Sarwesh",
    channels: ["channel1", "channel2", "channel3"],
  }
  const { handleSubmit, register } = useForm<InputTypes>()
  const onSubmit: SubmitHandler<InputTypes> = (data) => console.log(data)
  return (
    <Container>
      <div className="flex flex-col justify-center items-center space-y-2">
        <h3 className="text-2xl m-auto text-gray-600">
          Upload Video:
        </h3>
        <form className="p-2 rounded-lg shadow-md flex flex-col space-y-2 w-full md:w-[45%] " onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-lg text-gray-400">{data.name}</h3>
          <div className="flex flex-col mt-2">
            <p className="text-md text-gray-600">
              Upload Video:
            </p>
            <div className="flex space-x-1">
              <label htmlFor="video" className="p-2 rounded-lg bg-greenc text-white w-[35%] text-center">Upload</label>
              <input type="file" accept="video/*" id="video" className="invisible w-0" {...register("video")} />
              <div className="border border-gray-300 rounded-md w-[65%] p-2">No file selected</div>
            </div>
          </div>
          <div >
            <p className="text-md text-gray-600">
              Title:
            </p>
            <input id="title" type="text"  {...register("title", { required: true })} className="text-sm sm:text-base placeholder-gray-400 px-4 rounded-lg border border-gray-200 w-full py-2 focus:outline-none focus:border-greenc" placeholder="Video title" />
          </div>
          <div >
            <p className="text-md text-gray-600">
              Video Description:
            </p>
            <textarea id="description" {...register("description")} className="text-sm sm:text-base placeholder-gray-400 px-4 rounded-lg border border-gray-200 w-full py-2 focus:outline-none focus:border-greenc" placeholder="video description" />
          </div>
          <div>
            <p className="text-md text-gray-600">
              Channels:
            </p>
            <div className="flex space-x-1 overflow-y-scroll">
              {data.channels.map((e, i) => <div className="p-2 rounded-md text-greenc border border-greenc" key={i}>
                <label htmlFor={e}>{e}</label>
                <input type="radio" id={e} className="invisible w-0" {...register("channel")} />
              </div>)}
            </div>
            <div className="w-full mt-2">
              <button type="submit" className="block mx-auto p-2 bg-greenc text-white rounded-sm ">Upload</button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  )
}
