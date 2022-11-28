export const sandboxApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com',
    timeout: 8000
})