import axios from 'axios'

const api = axios.create({
    //192.168.0.32 - Utilizar ip da máquina quando estiver emulando no celular
    //Genymotion - 10.0.3.2
    //Emulador Android Studio - 10.0.2.2
    baseURL: 'http://localhost:3333'
})

export default api