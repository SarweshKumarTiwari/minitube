import UserChannels from './channel/UserChannels'
import ChannelInfo from './channel/ChannelInfo'

export default function Channels() {
  return (
    <div className=' md:flex w-full h-screen'><hr className='mb-1'/>
    <UserChannels/>
    <ChannelInfo/>
    <div className="absolute top-0 left-0 p-2 bg-gray-500"></div>
    </div>
  )
}
