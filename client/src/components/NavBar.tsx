import axios from "axios";
import BigScreenNav from "./navbar/BigScreenNav";
import SmallScreenNav from "./navbar/SmallScreenNav";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext/AuthContext";

export default function NavBar() {
    const {user,setuser}=useContext(AuthContext)
    const navigate=useNavigate();
    function logout() {
        axios.get("/auth/logout",{
            withCredentials:true
        }).then(doc=>{
            if (doc.data.success) {
                setuser({
                    isAuth:false,
                    data:undefined
                })
                navigate("/");
            }
        }).catch(err=>console.log(err));
    }
    return (
        <>
            <BigScreenNav isUser={user?user.isAuth:false} userName={user?.data?.name} logout={logout}/>
            <SmallScreenNav isUser={user?user.isAuth:false} userName={user?.data?.name}/>
        </>
    )
}