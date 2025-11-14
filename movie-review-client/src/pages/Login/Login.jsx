import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/user'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const Login = async () => {
        if (email.length == 0) {
            toast.warning('please enter email')
        } else if (password.length == 0) {
            toast.warning('please enter password')
        } else {
            const response = await login(email, password)

            if (response['status'] == 'success') {
                toast.success('login successful')

                sessionStorage.setItem('token', response['data']['token'])

                // set the logged in user information
                setUser({
                    firstName: response['data']['firstName'],
                    lastName: response['data']['lastName'],
                })

                // navigate to the PropertyListing page
                navigate('/home')
            } else {
                toast.error(response['error'])
            }
        }
    };

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6 col-lg-4 border p-4 shadow-sm'>
                    <div className='d-flex justify-content-center'>
                        <h1>Login</h1>
                    </div>
                    <div className='container p-3'>
                        <form >
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    aria-describedby="emailHelp"
                                    // value={email} 
                                    // onChange={(e) => setEmail(e.target.value)} 
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="passwordInput"
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Login</button>
                            <div className='d-flex justify-content-center mt-3'>
                                Don't have an account? <a href="/register">Register</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login