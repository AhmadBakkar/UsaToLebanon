import axios from "axios";

const baseUrl = `http://localhost:3001`

const getCredentials = async () => {
    let url = `${baseUrl}/login`
    return await axios.get(url).then(response => response).catch(err => err.response)
}


export{
    getCredentials,
}