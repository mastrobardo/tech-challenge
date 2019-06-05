import * as ActionsTypes from './types'
const uuidv4 = require('uuid/v4');

export const addContact = contact => {
    let nextId = uuidv4();
    return ({
        type: ActionsTypes.ADD,

        payload: {
            id: nextId,
            currentSelected: nextId,
            contact
        }
    })
};

export const showForm = isVisible => ({
    type: ActionsTypes.SHOW,
    payload: {
        formIsVisible: true
    }
})

export const listContacts = isVisible => ({
    type: ActionsTypes.LIST,
    payload: {
        formIsVisible: false
    }
})

export const deleteContact = id => {
    return ({
        type: ActionsTypes.DEL,
        payload: {
            id, currentSelected: -1
        }
    })
}


export const selectContact = id => {
    return ({
        type: ActionsTypes.SELECT,
        payload: {id}
    })
};

export const editContact = (id, contact) => {
    
    return {
        type: ActionsTypes.EDIT,
        payload: {id, contact}
    };
}