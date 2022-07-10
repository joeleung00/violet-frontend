class Utils {
    static convertObject2ParamString(obj){
        return Object.keys(obj).map(key => `${key}=${obj[key]}`)
        .join('&')
    }
    
    static isLoginSucess(headers) {
        return !headers['content-type'].includes('text/html')
    }

    static prettyTime(str) {
        let date = new Date(str)
        let option = { year: 'numeric', month: 'long', day: 'numeric' }
        return date.toLocaleTimeString('en-US', option)
    }
}

export default Utils