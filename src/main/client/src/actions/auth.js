import axios from 'axios';

export const login = user => {
    return axios
        .post(
            'https://reqres.in/api/login',
            {
                email: user.email,
                password: user.password
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
            return response.data.token
        })
        .catch(err => {
            console.log(err)
        })
}