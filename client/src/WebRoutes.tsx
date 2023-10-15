import { lazy } from "react"
import {Route, BrowserRouter as Router,Routes} from "react-router-dom"
import Player from "./pages/Player";
import Home from "./pages/Home";
import History from "./pages/History";
import MyVideos from "./pages/MyVideos";
import NavBar from "./components/NavBar";
const SignUp=lazy(()=>import("./pages/SignUp"))
const SignIn=lazy(()=>import("./pages/SignIn"))
export default function WebRoutes() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/watch" element={<Player/>} />
        <Route path="/history" element={<History/>}/>
        <Route path="/myvideos" element={<MyVideos/>}/>
      </Routes>
    </Router>
  )
}
