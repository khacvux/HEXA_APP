import { call, put, takeLeading } from 'redux-saga/effects'
import { getFollowRequestsAPI, getListFollowerAPI } from '../../apis/followAPIs'
import * as TYPES from '../constants/follows'
import * as ACTION from '../actions/followsAction'



function* getListFollower(data) {
    const { token, userId } = data.payload
    try {
        console.log('GET LIST FOLLOWER running...')
        const res = yield call(getListFollowerAPI,{userId, token})
        
        if(res){
            // yield put(ACTION.getListFollowerSuccess(res))
            // console.log('in saga',res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

function* getFollowRequests(data) {
    try {
        console.log('GET FOLLOW REQUESTS running...')
        const res = yield call(getFollowRequestsAPI, {
            userId: data.payload.userId,
            token: data.payload.token
        })
        if(res.status == 'ok') {
            yield put(ACTION.getListFollowRequestSuccess(res.data))
        }
    } catch (error) {
        yield put(ACTION.getFail(error))
    }
}


export default followsSaga = [
    takeLeading(TYPES.GET_LIST_FOLLOWER, getListFollower),
    takeLeading(TYPES.GET_LIST_FOLLOW_REQUEST, getFollowRequests)
]