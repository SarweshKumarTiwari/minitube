import axios from "axios";
import BigScreenNav from "./navbar/BigScreenNav";
import SmallScreenNav from "./navbar/SmallScreenNav";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const props={isUser:true,userName:"xyz",logout};
    const navigate=useNavigate();
    function logout() {
        axios.get("/auth/logout",{
            withCredentials:true
        }).then(doc=>{
            if (doc.data.success) {
                navigate("/");
            }
        }).catch(err=>console.log(err));
    }
    return (
        <>
            <BigScreenNav isUser={props.isUser} userName={props.userName} logout={logout}/>
            <SmallScreenNav isUser={props.isUser} userName={props.userName}/>
        </>
    )
}