import { ToastContainer } from 'react-toastify'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

        <Route path='home' element={
          <Home />
        }>

        </Route>
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
