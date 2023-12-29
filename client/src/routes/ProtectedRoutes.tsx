import {useContext} from 'react'
import AuthContext from '../contexts/AuthContext/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutes() {
  const {user}=useContext(AuthContext);
  if (!user?.isAuth) {
    return <Navigate to='/signin'/>
  }
  return (
    <Outlet/>
  )
}
