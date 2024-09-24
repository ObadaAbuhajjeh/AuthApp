import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Login from "./components/Login.jsx"
import Register from "./components/Register"
import Home from "./components/Home.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function App() {
  const navigate = useNavigate();
  const [isLogin,setIsLogin] = useState(localStorage.getItem('userToken')?true:false);
  const [userData,setUserData] = useState({});
  function handleLogout(){
    localStorage.removeItem('userToken');
    setIsLogin(false);
    setUserData({});
    navigate('/login');
  }
  return (
    <>
      <Navbar isLogin = {isLogin} handleLogout={handleLogout} userData={userData} />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setIsLogin = {setIsLogin} setUserData={setUserData} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<h2>Page Not Found</h2>} />

      </Routes>
    </>
  )
}
