import BigScreenNav from "./navbar/BigScreenNav";
import SmallScreenNav from "./navbar/SmallScreenNav";


export default function NavBar() {
    const props={isUser:true,userName:"xyz"};
    return (
        <>
            <BigScreenNav isUser={props.isUser} userName={props.userName}/>
            <SmallScreenNav isUser={props.isUser} userName={props.userName}/>
        </>
    )
}