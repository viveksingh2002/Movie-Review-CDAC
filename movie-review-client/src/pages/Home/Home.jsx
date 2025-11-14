import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'

function Home() {
    return (
        <div>
            <Navbar />

            <Sidebar />

            <Outlet />
            <footer>
                <div className='d-flex justify-content-center text-align-centre bg-secondary text-light' id='footer
                '>
                    <p>&copy; {new Date().getFullYear()} Movie Review. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Home