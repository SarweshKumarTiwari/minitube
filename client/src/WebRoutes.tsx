import { lazy } from "react"
import {Route, BrowserRouter as Router,Routes} from "react-router-dom"
const Home=lazy(()=>import("./pages/Home"));
const SignUp=lazy(()=>import("./pages/SignUp"))
const SignIn=lazy(()=>import("./pages/SignIn"))
const Player=lazy(()=>import("./pages/Player"))
export default function WebRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/watch" element={<Player/>} />
      </Routes>
    </Router>
  )
}
