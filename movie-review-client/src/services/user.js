import axios from 'axios'

import { config } from './config'


// Register
export async function register(firstName, lastName, email, phone, dob, password) {
    try {

        const url = `${config.server}/user/register`

        const body = { firstName, lastName, email, phone, dob, password }

        const response = await axios.post(url, body)

        return response.data
        
    } catch (ex) {
        console.log("Exception: ", ex);
        
    }
}


// Login
export async function login(email, password) {
    try {
        const url = `${config.server}/user/login`

        const body = { email, password }

        const response = await axios.post(url, body)

        return response.data

    } catch (ex) {
        console.log(`Exception: `, ex);

    }


}