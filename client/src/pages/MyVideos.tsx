
import SubNavBar from '../components/navbar/SubNavBar'
import Button from '../components/Button'
import UploadVideo from './video/UploadVideo'
import { useState } from 'react'
import MyUploadedVideos from './video/MyUploadedVideos';

export default function MyVideos() {
    const [toggler, settoggler] = useState(false);
    return (
        <div>
            <SubNavBar>
                <Button className="flex items-center space-x-1" onClick={()=>settoggler(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="fill-gray-400" viewBox="0 0 16 16">
                        <path d="M6.804 8 1 4.633v6.734L6.804 8Zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" />
                        <path d="M14.804 8 9 4.633v6.734L14.804 8Zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" />
                    </svg>
                    <p className="text-gray-600 text-sm">Saved Videos</p>
                </Button>
                <Button className="flex items-center space-x-1" onClick={()=>settoggler(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="fill-gray-400" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg>
                    <p className="text-gray-600 text-sm">Add Videos</p>
                </Button>
            </SubNavBar>
            {toggler?<MyUploadedVideos/>:<UploadVideo/>}
        </div>
    )
}
