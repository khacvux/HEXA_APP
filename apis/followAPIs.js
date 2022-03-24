import AXIOS from "./axiosClient";

const url = 'follow/'



export const getListFollowerAPI = async ({userId, token}) => {
    try {
        let params = ''
        userId && (params = `${userId}/following`)
        const res = await AXIOS.get(`${url}${params}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (e) {
        console.log(e)
    }   
}

export const getFollowRequestsAPI = async ({userId, token}) => {
    try {
        let params = ''
        userId && (params = `${userId}/request`)
        const res = await AXIOS.get(`${url}${params}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (e) {
        console.log(e)
    }   
}

export const getListFollowingAPI = async ({userId, token}) => {
    try {
        let params = ''
        userId && (params = `${userId}/follower`)
        const res = await AXIOS.get(`${url}/${params}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}