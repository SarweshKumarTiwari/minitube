import { SetStateAction, useState } from "react";
import logo1 from "../../assets/icon-50x50.png";
import OutsideAlerter from "../../hooks/closeDropdownHook";
import { NavLink } from "react-router-dom";

function BeforeAuth() {
    return (
        <div className="flex items-center mr-4 space-x-[12px]">
            <NavLink to="/signin" className="p-2 rounded-xl text-greenc border border-greenc hover:bg-greenc hover:text-white">
                Sign In
            </NavLink>
            <NavLink to="/signup" className="p-2 rounded-xl bg-greenc text-[#FFFFFF] transition delay-100 hover:scale-y-110 hover:scale-x-110">
                Get Started
            </NavLink>
        </div>
    )
}

function AfterAuth(props: { dropdown: boolean, setdropdown: React.Dispatch<SetStateAction<boolean>> }) {
    return (
        <div className="flex items-center mr-4 space-x-[12px]">
            <NavLink to="/history" className=" p-2 text-gray-600 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className="fill-greenc" viewBox="0 0 16 16">
                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                </svg>
            </NavLink>
            <NavLink to="/myvideos" className=" p-2 text-gray-600 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className="fill-greenc" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                </svg>
            </NavLink>
            <OutsideAlerter data={{ drop: props.dropdown, setDrop: props.setdropdown }}>
                <button type="button" className="p-2" onClick={() => props.setdropdown(!props.dropdown)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className="fill-gray-500" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                </button>
            </OutsideAlerter>
        </div>
    )
}
export default function BigScreenNav(props: { isUser: boolean|null, userName?: string, logout: () => void }) {
    const [dropdown, setdropdown] = useState(false);
    return (
        <div className=" max-md:hidden max-md:invisible sticky z-10 top-0 py-2 px-10 bg-gray-50">
            <div className="flex justify-between items-center max-h-full ">
                <NavLink to="/" className="flex items-center space-x-[6px]">
                    <img src={logo1} alt="logo" width={50} height={50} />
                    <h2 className="text-2xl text-gray-800">MiniTube</h2>
                </NavLink>
                <NavLink to="/search" className="p-2 flex space-x-2 items-center border border-gray-400 rounded-md">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-gray-400 stroke-2" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <p className="text-gray-400">Search</p>
                </NavLink>
                {props.isUser ? <AfterAuth dropdown={dropdown} setdropdown={setdropdown} /> : <BeforeAuth />}
            </div>
            {dropdown && <div className="relative" >
                <div className="absolute bg-gray-100 rounded-lg top-0 right-0 mr-4 max-w-[12rem] p-2 border-[1px]">
                    <p className="text-gray-600 text-center">{props.userName?.toUpperCase()}</p>
                    <NavLink to="/" className="flex p-2 space-x-[4px] text-gray-600  items-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-gray-600" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                        </svg>
                        <p>Pofile Settings</p>
                    </NavLink>
                    <button className="flex p-2 space-x-[4px] text-gray-600  items-center" onClick={() => props.logout()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-rose-400" viewBox="0 0 16 16">
                            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                            <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
                        </svg>
                        <p>Sign Out</p>
                    </button>
                </div>
            </div>}
        </div>
    )
}
