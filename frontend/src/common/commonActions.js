import axios from 'axios'
const BASE_URL = 'http://localhost:3011/api'

let showSearch = false;
let userInfo = false;

export function showSearchBar() {
    showSearch = !showSearch;
    console.log("value.: ",showSearch);
    const request = showSearch;
    return {
        type: 'SHOW_SEARCH_BAR_CHANGED',
        payload: request
    }
}

export function showUserInfo() {
    userInfo = !userInfo;
    const request = userInfo;
    return {
        type: 'SHOW_USER_INFO_CHANGED',
        payload: request
    }
}