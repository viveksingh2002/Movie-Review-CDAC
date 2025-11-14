import React, { useState } from 'react';
import './Register.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // useNavigate must be called as a hook (a function call)
    const navigate = useNavigate();

    // This function needs to be an event handler for the form's onSubmit event
    const onRegister = async () => {

        if (firstName.length === 0) {
            toast.warning('Please enter first name');
        } else if (lastName.length === 0) {
            toast.warning('Please enter last name');
        } else if (email.length === 0) {
            toast.warning('Please enter email');
        } else if (phone.length === 0) {
            toast.warning('Please enter phone number');
        } else if (password.length === 0) {
            toast.warning('Please enter password');
        } else if (confirmPassword.length === 0) {
            toast.warning('Please confirm password');
        } else if (password !== confirmPassword) {
            toast.warning('Password does not match');
        } else {
            const response = await register(
                firstName,
                lastName,
                email,
                phone,
                dob,
                password
            )
            if (response['status'] === 'success') {
                toast.success('Successfully registered user')
                navigate('/')
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
                        <h1>Register</h1>
                    </div>
                    <div className='container p-3'>
                        {/* Attach the onRegister function to the form's onSubmit event */}
                        <form onSubmit={onRegister}>
                            <div className='d-flex justify-content-between mb-3'>
                                <div className="me-2">
                                    <label htmlFor="firstnameinput" className="form-label">First Name</label>
                                    <input
                                        onChange={(e) => setFirstName(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="firstnameinput"
                                        required
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="lastnameinput" className="form-label">Last Name</label>
                                    <input
                                        onChange={(e) => setLastName(e.target.value)} // Corrected state setter
                                        type="text"
                                        className="form-control"
                                        id="lastnameinput"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email address</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobileinput" className="form-label">Mobile Number</label>
                                <input
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    className="form-control"
                                    id="mobileinput"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dobinput" className="form-label">Date of Birth</label>
                                <input
                                    onChange={(e) => setDob(e.target.value)}
                                    type="Date"
                                    className="form-control"
                                    id="dobinput"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="passwordInput"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cnfPasswordInput" className="form-label">Confirm Password</label>
                                <input
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="cnfPasswordInput"
                                    required
                                />
                            </div>

                            <button onClick={onRegister} type="submit" className="btn btn-success w-100">Register</button>
                            <div className='d-flex justify-content-center mt-3'>
                                Already have an account? <a href="/login">Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
