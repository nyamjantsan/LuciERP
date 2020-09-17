import axios from 'axios';

export const login = user => {
    return axios
        .post(
            'http://localhost:8085/api/users/auth',
            {
                username: user.username,
                password: user.password
            },
            {
                headers: { 'Content-Type': 'application/json'}
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