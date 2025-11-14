// import { ToastContainer } from 'toastify'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './pages/Login/Login';
import Register from './pages/Register/Register'; 
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />}/>
        <Route path='/login'  element={<Login/>}/>  
        <Route path='/register'  element={<Register/>}/>  
      </Routes>
      
    </div>
  )
}

export default App
