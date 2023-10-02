import { useLocation } from "react-router-dom"
import SubNavBar from "../../components/navbar/SubNavBar";
import Button from "../../components/Button";
export default function VideoCategories() {
    const location = useLocation();
    return (
        <SubNavBar >
            <Button className={location.pathname === "/" ? "bg-greenc text-white border-greenc ":""}>
                <p>All</p>
            </Button>
            <Button className={location.pathname === "sports" ? "bg-greenc text-white border-greenc":""}>
                <p>Sports</p>
            </Button>
            <Button className={location.pathname === "food" ? "bg-greenc text-white border-greenc":""}>
                <p>Food</p>
            </Button>
            <Button className={location.pathname === "music" ? "bg-greenc text-white border-greenc":""}>
                <p>Music</p>
            </Button>
            <Button className={location.pathname === "news" ? "bg-greenc text-white border-greenc":""}>
                <p>News</p>
            </Button>
            <Button className={location.pathname === "entertainment" ? "bg-greenc text-white border-greenc " : ""}>
                <p>Entertainment</p>
            </Button>
        </SubNavBar>
    )
}
