import * as ActionTypes from "./actions/types";
import countries from './constants' //temp

const initialState = {
    contacts: [
        // {id: 0, name: 'write Here', surname: 'your surname', email: 'your email', country: 'yourcountry'},
    ],
    countries: undefined,
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
    console.log('Action:' + action.type, state)
    switch (action.type) {
        case ActionTypes.SELECT: {
            
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
            return Object.assign({}, state, newState)
        }

        case ActionTypes.EDIT: {
            let id = action.payload.id
            let contactsCopy = state.contacts.concat()
            let newList = state.contacts.concat()
            contactsCopy = contactsCopy.filter(item => id !== item.id)
            newList = newList
                .filter(item => id === item.id)
                .map(item => {
                    return Object.assign({}, item, action.payload.contact)
                });
            contactsCopy = contactsCopy.concat(newList);
            return Object.assign({}, state, {adding: false, currentSelected: -1, contacts: contactsCopy})
        }
        contact
        case ActionTypes.DEL: {
            let id = action.payload.id
            let newContacts = {
                contacts: state.contacts
                    .concat()
                    .filter(item => id !== item.id)
            };

            return Object.assign({}, state, newContacts, {currentSelected: -1, adding: false})
        }
        case ActionTypes.FETCHED: {
            alert()
            let countries = action.payload.countries
            return Object.assign({}, state, {countries: countries})
        }
        default:
            return {
                ...state
            }
    }
}
