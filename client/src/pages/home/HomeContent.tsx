import { Link } from "react-router-dom"
import Container from "../../components/containers/Container"
import GridContainer from "../../components/containers/GridContainer"
import videoTypes from "../../types/VideoTypes"
import VideoGridCard from "../../components/cards/VideoGridCard"
import InfiniteScrollHook from "../../hooks/InfiniteScrollHook";

export default function HomeContent() {
  const arr: videoTypes[] = [
    {
      v_title: "Any publised_time ",
      channel: { _id: "fgh", c_name: "sample" },
      v_cover: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/52d24c99322159.5ef08afdcf399.jpg",
      publised_time: "2 hour ago",
      videoId: "xyz"
    },
    {
      v_title: "Any publised_time ",
      channel: { _id: "fgh", c_name: "sample" },
      v_cover: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/52d24c99322159.5ef08afdcf399.jpg",
      publised_time: "2 hour ago",
      videoId: "xyz"
    },
    {
      v_title: "Any publised_time ",
      channel: { _id: "fgh", c_name: "sample" },
      v_cover: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/52d24c99322159.5ef08afdcf399.jpg",
      publised_time: "2 hour ago",
      videoId: "xyz"
    },
    {
      v_title: "Any publised_time ",
      channel: { _id: "fgh", c_name: "sample" },
      v_cover: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
      publised_time: "2 hour ago",
      videoId: "xyz"
    },
    {
      v_title: "Any publised_time ",
      channel: { _id: "fgh", c_name: "sample" },
      v_cover: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
      publised_time: "2 hour ago",
      videoId: "xyz"
    }
    ,
    {
      v_title: "Any publised_time ",
      channel: { _id: "fgh", c_name: "sample" },
      v_cover: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
      publised_time: "2 hour ago",
      videoId: "xyz"
    }
    ,
    {
      v_title: "Any publised_time ",
      channel: { _id: "fgh", c_name: "sample" },
      v_cover: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
      publised_time: "2 hour ago",
      videoId: "xyz"
    }
    ,
    {
      v_title: "Any publised_time ",
      channel: { _id: "fgh", c_name: "sample" },
      v_cover: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
      publised_time: "2 hour ago",
      videoId: "xyz"
    }
  ]
  const {divReference}= InfiniteScrollHook()
  return (
    <Container>
      <GridContainer>
        {arr.map((e, i) => {
          return (
            <Link to="/watch" state={e} key={i}>
              <VideoGridCard data={e} point={arr.length - 1 === i ? divReference : null} />
            </Link>
            )
        })}
      </GridContainer>
    </Container>
  )
}
