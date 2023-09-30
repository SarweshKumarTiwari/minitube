import { lazy } from 'react'
import NavBar from '../components/NavBar'
import VideoCategories from './home/VideoCategories'

const AfterAuthHome=lazy(()=>import("./home/AfterAuthHome"))
const BeforeAuthHome=lazy(()=>import("./home/BeforeAuthHome"))

export default function Home() {
  const userData={isUser:true,username:"xyz"}
  return (
    <div>
      <NavBar/>
      <VideoCategories/>
      {userData.isUser?<AfterAuthHome/>:<BeforeAuthHome/>}
    </div>
  )
}
