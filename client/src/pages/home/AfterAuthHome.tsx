import { Link } from "react-router-dom"
import Container from "../../components/containers/Container"
import GridContainer from "../../components/containers/GridContainer"
import videoTypes from "../../types/VideoTypes"

export default function AfterAuthHome() {
  const arr:videoTypes[] = [
    {
      title: "Any publised_time ",
      channel: "start up",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/52d24c99322159.5ef08afdcf399.jpg",
      publised_time: "2 hour ago",
      videoId: "xyz"
    },
    {
      title: "Any publised_time ",
      channel: "start up",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/52d24c99322159.5ef08afdcf399.jpg",
      publised_time: "2 hour ago",
      videoId: "xyz"
    },
    {
      title: "Any publised_time ",
      channel: "start up",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/52d24c99322159.5ef08afdcf399.jpg",
      publised_time: "2 hour ago",
      videoId: "xyz"
    },
    {
      title: "Any publised_time ",
      channel: "start up",
      image: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
      publised_time: "2 hour ago",
      videoId: "xyz"
    },
    {
      title: "Any publised_time ",
      channel: "start up",
      image: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
      publised_time: "2 hour ago",
      videoId: "xyz"
    }
  ]
  return (
    <Container>
      <GridContainer>
        {arr.map((e, i) => <Link to="/watch" className="p-1 flex flex-col group space-y-1 " key={i}>
          <img src={e.image} alt="gv" className="rounded-lg w-full h-[10rem] group-hover:blur-sm" />
          <div className="p-4">
            <h3 className="text-md text-bold">{e.title}</h3>
            <div className="flex justify-between">
              <div className="flex text-gray-600 text-sm items-center space-x-1">
                <p>{e.channel}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="fill-gray-600" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <p>{e.publised_time}</p>
            </div>
          </div>
        </Link>)}
      </GridContainer>
    </Container>
  )
}
