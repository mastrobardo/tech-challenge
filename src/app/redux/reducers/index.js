import * as ActionTypes from "./actions/types";
import countries from './constants' //temp

const initialState = {
    byIds: [1, 2],
    contacts: [
        {id: 0, name: 'write Here', surname: 'your surname', email: 'your email', country: 'yourcountry'},
        {id: 1, name: 'aaa bbb', surname: 'cccc', email: 'adsdfsdf', country: 'yourcountry'}
    ],
    countries: countries,
    currentSelected: -1

}
export default (state = initialState, action) => {
    console.log(action.type, action.payload)
    switch (action.type) {
        case ActionTypes.SELECT: {
            return Object.assign({}, state, action.payload)
        }
        case ActionTypes.ADD: {
            return {
                contacts: {
                    ...state.contacts,
                    [action.id]: action.payload
                }
            }
        }
        case ActionTypes.EDIT: {

            return {
                ...state
            }
        }

        case ActionTypes.DEL: {
            let newContacts = {
                contacts: state.contacts.concat().filter(item => action.payload.id !== item.id)
            };
            console.log(action.payload.id, newContacts)
            return Object.assign({}, state, newContacts)
        }

        default:
            return {
                ...state
            }
    }
}
