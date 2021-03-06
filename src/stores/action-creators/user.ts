import axios from 'axios'
import { Dispatch } from 'react'
import {UserAction, UserActionTypes} from '../../types/user'


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(responce.data);
            
            setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: responce.data})
            }, 500);
        } catch (error) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR, 
                payload: 'Ошибка загрузки',
            })
        }
    }
}