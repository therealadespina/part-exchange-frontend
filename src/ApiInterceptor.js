import axios from 'axios'

const customAxios = axios.create({})

customAxios.defaults.headers.common['Accept'] = 'application/json'
customAxios.defaults.headers.common['Content-Type'] = 'application/json'

customAxios.interceptors.response.use(
    function (response) {
        if (response.data) {
            // return success
            if (response.status === 200 || response.status === 201) {
                return response;
            }
            // reject errors & warnings
            return Promise.reject(response);
        }

        // default fallback
        return Promise.reject(response);
    },
    function (error) {
        // if the server throws an error (404, 500 etc.)
        return Promise.reject(error);
    }
)
export default customAxios;
