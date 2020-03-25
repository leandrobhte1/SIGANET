import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'


import commonReducer from '../common/commonReducer'

const rootReducer = combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    common: commonReducer
})

export default rootReducer