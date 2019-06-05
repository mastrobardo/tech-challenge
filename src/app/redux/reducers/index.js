import * as ActionTypes from "./actions/types";
import countries from './constants' //temp

const initialState = {
    contacts: [
        // {id: 0, name: 'write Here', surname: 'your surname', email: 'your email', country: 'yourcountry'},
    ],
    countries: countries,
    currentSelected: -1,
    adding: false
}

const newContact = {
    name: '',
    surname: '',
    email: '',
    country: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SELECT: {
            if (state.currentSelected === action.payload.id) {
                return state;
            }
            let newState = {
                currentSelected: action.payload.id
            };
            return Object.assign({}, state, newState)
        }
        case ActionTypes.ADD: {
            if (state.adding) {
                return state;
            }
            let newState = {
                contacts: state.contacts.concat(),
                currentSelected: action.payload.id,
                adding: true
            };
            let c = {...newContact};
            c.id = action.payload.id
            newState.contacts.unshift(c)
            console.log('adding', newState.contacts)
            return Object.assign({}, state, newState)
        }

        case ActionTypes.EDIT: {
            let id = action.payload.id
            let contactsCopy = state.contacts.concat()
            let newList = state.contacts.concat()
            newList.filter(item => id === item.id)
            newList = newList.map(item => Object.assign({}, item, action.payload.contact));
            return Object.assign({}, state, {adding: false, currentSelected: -1, contacts: newList})
        }

        case ActionTypes.DEL: {
            let id = action.payload.id
            let newContacts = {
                contacts: state.contacts
                    .concat()
                    .filter(item => id !== item.id)
            };

            return Object.assign({}, state, newContacts)
        }

        default:
            return {
                ...state
            }
    }
}
