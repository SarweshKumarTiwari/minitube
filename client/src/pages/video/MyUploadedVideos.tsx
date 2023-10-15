import { useState } from "react";
import Container from "../../components/containers/Container";
import videoTypes from "../../types/VideoTypes"
import GridContainer from "../../components/containers/GridContainer";
import VideoCard from "../../components/cards/VideoCard";

export default function MyUploadedVideos() {
  const [myVideos, setmyVideos] = useState<videoTypes[] | null>(null);

  function removeVideos(i:number){
    const arr=[...myVideos!];
    arr.splice(i,1);
    setmyVideos(arr);
  }
  return (
    <Container>
      <div className="w-full">
        <h1 className="text-gray-600 text-center mb-2 text-3xl">My Videos : </h1>
        <GridContainer>
          {
            myVideos?.length ?
              myVideos.map(
                (e, i) => (
                  <VideoCard key={i}>
                    <img src={e.image} alt="gv" className="rounded-lg w-fit h-[10rem] hover:bg-greenc" />
                    <button type='button' className="absolute top-0 right-0 mt-1 mr-2 p-2  group-hover:visible" onClick={()=>removeVideos(i)}>
                      <p className="text-sm text-red-500">Remove</p>
                    </button>
                    <div className="p-4 w-full">
                      <div className="flex text-gray-600 text-sm items-center space-x-1">
                        <p>{e.channel}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="fill-gray-600" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                      </div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-md text-bold">{e.title}</h3>
                        <p> {e.publised_time}</p>
                      </div>
                      <div className="text-sm text-gray-500 flex space-x-2 mt-2 justify-end">
                        <p>{e.description}</p>
                      </div>
                    </div>
                  </VideoCard>
                )
              )
              :
              <div className="mt-8 p-2 flex justify-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className="fill-gray-400" viewBox="0 0 16 16">
                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                <p className="text-lg text-gray-600">No videos yet.</p>
              </div>
          }
        </GridContainer>
      </div>
    </Container>
  )
}
