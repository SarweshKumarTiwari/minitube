import { lazy } from "react";
const BigScreenNav=lazy(()=>import("./navbar/BigScreenNav"))
const SmallScreenNav=lazy(()=>import("./navbar/SmallScreenNav"))

export default function NavBar() {
    const props={isUser:true,userName:"xyz"};
    return (
        <>
            <BigScreenNav isUser={props.isUser} userName={props.userName}/>
            <SmallScreenNav isUser={props.isUser} userName={props.userName}/>
        </>
    )
}
