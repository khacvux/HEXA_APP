import { useEffect, useState } from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import { FlatGrid } from 'react-native-super-grid';

import PostItem from './PostItem'
import EmptyAnimation from '../LottieAnimation/EmptyAnimation'

import { useDispatch, useSelector } from 'react-redux';
import { getListPostUser } from '../../redux/actions/postsAction';
import ListPostSkeleton from '../Skeleton/ListPostSkeleton';
import OnDeletePostModal from '../Modal/OnDeletePostModal';


const ListPost = ({userId, myUserId, numberOfPosts}) => {

    const dispatch = useDispatch()
    const { listPostUser } = useSelector(state => state.postsReducer)
    const { token } = useSelector(state => state.authReducer)
    const { getListPostLoading } = useSelector(state => state.onLoadingReducer)

    const [isVisibleDeleteModal, setVisibleDeleteModal] = useState(false)
    const [isIdPostSelected, setIdPostSelected] = useState(null)
    // console.log(isIdPostSelected)
    const handleVisibleDeleteModal = () => {
        setVisibleDeleteModal(!isVisibleDeleteModal)
    }

    useEffect(() => {
        if(numberOfPosts && myUserId && userId) {
            dispatch(getListPostUser({myUserId, userId, token}))
        }
    }, [])

    return (
        <View style={tw`bg-white h-full`}>
            {
                getListPostLoading ? (
                    <ListPostSkeleton />
                ) : (
                    numberOfPosts == 0 || listPostUser.length == 0 ? (
                        <View style={tw`w-full h-full items-center justify-center`}>
                            <EmptyAnimation title={'No posts yet!!'} />
                        </View>
                    ) : (
                        <FlatGrid
                                data={listPostUser}
                                itemDimension={100}
                                renderItem={(item) => 
                                    <PostItem item={item} 
                                        handleVisibleDeleteModal={handleVisibleDeleteModal} 
                                        setIdPostSelected={setIdPostSelected}
                                    />
                                }   
                                style={tw`pt-2`}
                                keyExtractor={item => item.postsId} 
                                spacing={5} 
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                            />
                    )
                )
            }

            <OnDeletePostModal 
                handleVisibleDeleteModal={handleVisibleDeleteModal}
                isVisibleDeleteModal={isVisibleDeleteModal}
                isIdPostSelected={isIdPostSelected}
            />
        </View>
    )
}

export default ListPost
