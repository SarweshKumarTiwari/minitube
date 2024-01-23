import {useState} from 'react'
import { channel } from '../../types/channel.Type'

export default function UserChannels() {
    const channels:channel[]=[
        {
            c_name:"dff",
            c_videos:4,
            subscribers:14
        },
        {
            c_name:"dff",
            c_videos:4,
            subscribers:14
        },
        {
            c_name:"dff",
            c_videos:4,
            subscribers:14
        },
        {
            c_name:"dff",
            c_videos:4,
            subscribers:14
        }
    ]
    const [addChannel, setAddChannel] = useState(false);
    return (
    <div className=" h-full  md:flex flex-col space-y-2 p-2 w-1/4  border-r-[1px] border-t-[1px] rounded-md border-gray-300 overflow-y-auto">
        {!addChannel?<>
        <div className="w-full flex justify center">
            <button className="p-1 border-gray-300 border-[1px] text-gray-400 rounded-md" onClick={()=>setAddChannel(true)}>
                Add Channel
            </button>
        </div>
        <h3 className="text-2xl text-gray-600 my-2 text-center">All Channels</h3>
        {
            channels.map(e=>
                <button className="rounded-md p-1 border-gray-200 border-[1px] shadow-md">
                    <h3 className="text-gray-400 text-lg">
                        {e.c_name}
                    </h3>
                    <div className="flex justify-between items-center">
                        <p className='text-gray-400'>Subscribers : <span className='font-bold text-gray-500'>{e.subscribers}</span></p>
                        <p className='text-gray-400'>Videos : <span className='font-bold text-gray-500'>{e.c_videos}</span></p>
                    </div>
                </button> 
            )
        }
        </>:
        <AddChannel is={addChannel} notis={setAddChannel}/>
        }
    </div>
  )
}

export function AddChannel({is,notis}:{is:boolean,notis:React.Dispatch<React.SetStateAction<boolean>>}){
    return (
        <>
        <div className="w-full flex justify center">
            <button className="p-1 border-gray-300 border-[1px] text-gray-400 rounded-md" onClick={()=>notis(false)}>
                Add Channel
            </button>
        </div>
        <form className="flex flex-col space-y-1 text-gray-400">
            <h3 className="text-xl">Name of Channel </h3>
            <input type="text" className="w-full p-1 rounded-md border-[1px] border-gray-200" />
            <h3 className="text-xl">About this Channel </h3>
            <input type="text" className="w-full p-1 rounded-md border-[1px] border-gray-200" />
            <button type="submit" className='p-1 rounded-sm bg-greenc text-[white]'>Proceed...</button>
        </form>
        </>
    )
}
