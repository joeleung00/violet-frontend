import axios from 'axios'
import store from '@/store/index.js'

axios.defaults.withCredentials = true
axios.defaults.headers.common['Accept'] = '*/*'

axios.interceptors.response.use(undefined, function(error) {
    if (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            store.dispatch("Logout");
            return router.push("/login");
        }
    }
});

axios.interceptors.request.use(
    config => {
        config.url = `/api/v1${config.url}`
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

const customAxios = {
    install(app, options) {
        app.config.globalProperties.$myAxios = axios
    }
}

export default customAxios