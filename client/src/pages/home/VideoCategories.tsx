import {useLocation } from "react-router-dom"
export default function VideoCategories() {
    const location=useLocation();
  return (
    <div className="p-2 mx-4 border-t-[1px] border-gray-200 md:w-full flex space-x-4 overflow-y-scroll">
        <a href="/" className={`p-2 rounded-lg border ${location.pathname==="/"?"bg-greenc text-white border-greenc ":"border-gray-200 "} `}>
            <p>All</p>
        </a>
        <a href="/" className={`p-2 rounded-lg border ${location.pathname==="sports"?"bg-greenc text-white border-greenc ":"border-gray-200 "} `}>
            <p>Sports</p>
        </a>
        <a href="/" className={`p-2 rounded-lg border ${location.pathname==="food"?"bg-greenc text-white border-greenc ":"border-gray-200 "} `}>
            <p>Food</p>
        </a>
        <a href="/" className={`p-2 rounded-lg border ${location.pathname==="music"?"bg-greenc text-white border-greenc ":"border-gray-200 "} `}>
            <p>Music</p>
        </a>
        <a href="/" className={`p-2 rounded-lg border ${location.pathname==="news"?"bg-greenc text-white border-greenc ":"border-gray-200 "} `}>
            <p>News</p>
        </a>
        <a href="/" className={`p-2 rounded-lg border ${location.pathname==="entertainment"?"bg-greenc text-white border-greenc ":"border-gray-200 "} `}>
            <p>Entertainment</p>
        </a>
    </div>
  )
}
