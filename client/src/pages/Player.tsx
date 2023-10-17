import VideoComments from "./player/VideoComments";
import VideoPlayer from "./player/VideoPlayer";

export default function Player() {
  return (
    <>
    <div className="md:mx-2 flex flex-col md:flex md:flex-row">
      <VideoPlayer/>
      <VideoComments/>
    </div>
    </>
  )
}
