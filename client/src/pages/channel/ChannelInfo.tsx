import GridContainer from '../../components/containers/GridContainer'
import videoTypes from '../../types/VideoTypes'
import VideoGridCard from '../../components/cards/VideoGridCard';

export default function ChannelInfo() {
    const videos: videoTypes[] = [];
    return (
        <div className="relative md:w-3/4 mt-2  md:mt-8  ">
            <button className="absolute top-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-gray-500" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
            </button>
            <div className="flex space-x-4 items-center mb-2 md:mb-4 border-b-[1px] border-gray-300">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6_sEmGzEpjcjftkJx163BLsooWcRQq48ow&usqp=CAU' className='rounded-full w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-fit md:h-fit' alt='nt' />
                <div className="text-gray-400">
                    <h3 className="text-2xl text-gray-600">Channel</h3>
                    <p className="mt-2">Subscribers</p>
                    <p className="mt-2">Videos</p>
                </div>
            </div>
            <GridContainer>
                {
                    videos.length ? videos.map(e =>
                        <VideoGridCard data={e} />
                    ) :
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
    )
}
