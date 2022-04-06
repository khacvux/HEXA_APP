import * as TYPES from '../constants/songs'


export const getListCategorySong = payload => {
    return {
        type: TYPES.GET_LIST_CATEGORY_SONG,
        payload
    }
}

export const getListCategorySongSuccess = payload => {
    return {
        type: TYPES.GET_LIST_CATEGORY_SONG_SUCCESS,
        payload
    }
}

export const getListSongByCategory = payload => {
    return {
        type: TYPES.GET_LIST_SONG_BY_CATEGORY,
        payload
    }
}

export const getListSongByCategorySuccess = payload => {
    return {
        type: TYPES.GET_LIST_SONG_BY_CATEGORY_SUCCESS,
        payload
    }
}


export const findSongById = payload => {
    return {
        type: TYPES.FIND_SONG_BY_ID,
        payload
    }
}

export const findSongByIdSuccess = payload => {
    return {
        type: TYPES.FIND_SONG_BY_ID_SUCCESS,
        payload
    }
}

export const likeSong = payload => {
    return {
        type: TYPES.LIKE_SONG,
        payload
    }
}

export const likeSongSuccess = payload => {
    return {
        type: TYPES.LIKE_SONG_SUCCESS,
        payload
    }
}

export const commentSong = payload => {
    return {
        type: TYPES.COMMENT_SONG,
        payload
    }
}

export const commentSongSuccess = payload => {
    return {
        type: TYPES.COMMENT_SONG_SUCCESS,
        payload
    }
}

export const addSong = payload => {
    return {
        type: TYPES.ADD_SONG,
        payload
    }
}

export const addSongSuccess = payload => {
    return {
        type: TYPES.ADD_SONG_SUCCESS,
        payload
    }
}

export const addPlaylist = payload => {
    return {
        type: TYPES.ADD_PLAYLIST,
        payload
    }
}

export const addPlaylistSuccess = payload => {
    return {
        type: TYPES.ADD_PLAYLIST_SUCCESS,
        payload
    }
}

export const deletePlaylist = payload => {
    return {
        type: TYPES.DELETE_PLAYLIST,
        payload
    }
} 

export const deletePlaylistSuccess = payload => {
    return {
        type: TYPES.DELETE_PLAYLIST_SUCCESS,
        payload
    }
}

export const addSongToPlaylist = payload => {
    return {
        type: TYPES.ADD_SONG_TO_PLAYLIST,
        payload
    }
}

export const addSongToPlaylistSuccess = payload => {
    return {
        type: TYPES.ADD_SONG_TO_PLAYLIST_SUCCESS,
        payload
    }
}

export const deleteSongFromPlaylist = payload => {
    return {
        type: TYPES.DELETE_SONG_FROM_PLAYLIST,
        payload
    }
}

export const deleteSongFromPlaylistSuccess = payload => {
    return {
        type: TYPES.DELETE_SONG_FROM_PLAYLIST_SUCCESS,
        payload
    }
}

export const findPlaylistById = payload => {
    return {
        type: TYPES.FIND_PLAYLIST_BY_ID,
        payload
    }
}

export const findPlaylistByIdSuccess = payload => {
    return {
        type: TYPES.FIND_PLAYLIST_BY_ID_SUCCESS,
        payload
    }
}

export const findPlaylistByUserId = payload => {
    return {
        type: TYPES.FIND_PLAYLIST_BY_USERID,
        payload
    }
}

export const findPlaylistByUserIdSuccess = payload => {
    return {
        type: TYPES.FIND_PLAYLIST_BY_USERID_SUCCESS,
        payload
    }
}

export const actionFailure = error => {
    return {
        type: TYPES.ACTION_FAILURE,
        error
    }
}