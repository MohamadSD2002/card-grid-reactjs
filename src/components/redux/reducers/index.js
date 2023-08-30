import {combineReducers} from '@reduxjs/toolkit'
import { persons, tablePerson } from './persons'

const reducer = combineReducers({
    persons,
    tablePerson
})

export default reducer;