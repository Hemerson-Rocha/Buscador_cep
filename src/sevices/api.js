import axios from "axios";

// 62540000/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;