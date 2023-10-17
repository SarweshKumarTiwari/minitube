import { useState } from 'react'
import Container from '../../components/containers/Container'
import ListContainers from '../../components/containers/ListContainers'
import VideoCard from '../../components/cards/VideoCard'
import videoTypes from "../../types/VideoTypes"
import { Link } from 'react-router-dom'

interface history extends videoTypes {
  watch_duration: string
}
export default function HistoryList() {
  const history1: history[] = [
    {
      image: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
      channel: "Any channel",
      publised_time: "2 weeks ago",
      title: "Fun Video",
      videoId: "xyz",
      watch_duration: "12:00",
      description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam blanditiis aspernatur cumque commodi neque est autem facere molestias esse ipsam sequi vel quis cupiditate vitae, deserunt numquam laborum veniam."
    },
    {
      image: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
      channel: "Any channel",
      publised_time: "2 weeks ago",
      title: "Fun Video",
      videoId: "xyz",
      watch_duration: "12:00",
      description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam blanditiis aspernatur cumque commodi neque est autem facere molestias esse ipsam sequi vel quis cupiditate vitae, deserunt numquam laborum veniam."
    }, {
      image: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
      channel: "Any channel",
      publised_time: "2 weeks ago",
      title: "Fun Video",
      videoId: "xyz",
      watch_duration: "12:00",
      description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam blanditiis aspernatur cumque commodi neque est autem facere molestias esse ipsam sequi vel quis cupiditate vitae, deserunt numquam laborum veniam."
    }
  ]
  const [history, sethistory] = useState(history1);
  const removeHistory = (id: number) => {
    const duplicate = [...history]
    duplicate.splice(id, 1);
    sethistory(duplicate);
  }

  return (
    <Container>
      <div className='w-full'>
        <h1 className="text-gray-600 text-center mb-2 text-3xl">History : </h1>
        <ListContainers>
          {history.length ? history.map(
            (e, i) => <div className="relative" key={i}>
              <Link to="/watch" state={e} >
                <VideoCard >
                  <img src={e.image} alt="gv" className="rounded-lg w-fit h-[10rem] hover:bg-greenc" />
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
                      <p className='invisible sm:visible'>{e.watch_duration}</p>
                    </div>
                  </div>
                </VideoCard>
              </Link>
              <button type='button' className="absolute top-0 right-0 mt-1 mr-2 p-2  group-hover:visible" onClick={() => { removeHistory(i); console.log("kfyu") }}>
                <p className="text-sm text-red-500">Remove</p>
              </button>
            </div>
          )
            :
            <div className="mt-8 p-2 flex justify-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className="fill-gray-400" viewBox="0 0 16 16">
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
              </svg>
              <p className="text-lg text-gray-600">No user history yet.</p>
            </div>
          }
        </ListContainers>
      </div>
    </Container>
  )
}
