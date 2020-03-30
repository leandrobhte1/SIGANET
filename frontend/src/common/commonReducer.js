const INITIAL_STATE = {search: false, userInfo: false, showModal: false}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SHOW_SEARCH_BAR_CHANGED':
            return { ...state, search: action.payload }
        case 'SHOW_USER_INFO_CHANGED':
            return { ...state, userInfo: action.payload }
        case 'SHOW_MODAL_CHANGED':
            return { ...state, showModal: action.payload }
        default:
            return state
    }
}