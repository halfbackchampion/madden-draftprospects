import axios from "axios"

const PositionService = () => {
    const baseUrl = "http://127.0.0.1:5000"

    const getAll = async () => {
        const response = await axios.get(baseUrl)
        return response.data
    }

    const getPosition = async (id) => {
        const response = await axios.get(`${baseUrl}/${id}`)
        return response.data
    }

    return {getAll, getPosition}
}

export default PositionService