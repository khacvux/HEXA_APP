import * as TYPES from '../constants/onLoading'

export const onLoadingAuth = payload => {
    return {
        type: TYPES.ON_LOADING_AUTH,
        payload
    }
} 

export const onLoadingSetFollowStatus = payload => {
    return {
        type: TYPES.ON_LOADING_SET_FOLLOW_STATUS,
        payload
    }
}