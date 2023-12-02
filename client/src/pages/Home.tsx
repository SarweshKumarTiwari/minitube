
import AfterAuthHome from './home/AfterAuthHome'
import BeforeAuthHome from './home/BeforeAuthHome'
import VideoCategories from './home/VideoCategories'


export default function Home() {
  const userData={isUser:true,username:"xyz"}
  return (
    <div>
      <VideoCategories/>
      {userData.isUser?<AfterAuthHome/>:<BeforeAuthHome/>}
    </div>
  )
}
