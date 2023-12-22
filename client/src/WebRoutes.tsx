import { lazy } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Player from "./pages/Player";
import Home from "./pages/Home";
import History from "./pages/History";
import MyVideos from "./pages/MyVideos";
import NavHolders from "./NavHolders";
import Search from "./pages/Search";
const SignUp = lazy(() => import("./pages/SignUp"))
const SignIn = lazy(() => import("./pages/SignIn"))
export default function WebRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavHolders/>}>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="watch" element={<Player />} />
          <Route path="history" element={<History />} />
          <Route path="myvideos" element={<MyVideos />} />
          <Route index element={<Home/>}/>
        </Route>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </Router>
  )
}
