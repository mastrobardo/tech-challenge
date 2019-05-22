import * as ActionsTypes from './types'

let nextId = 0;

export const addContact = contact => ({
    type: ActionsTypes.ADD,
    id: ++nextId,
    payload: {
        id: nextId,
        contact
    }
});

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

export const deleteContact = id => {console.log('ID to be deleted', id) ;return ({
    type: ActionsTypes.DEL,
    payload: {id}
})
};

export const selectContact = currentSelected => {
    console.log('currentSelected', currentSelected)
    return ({
        type: ActionsTypes.SELECT,
        payload: {currentSelected}
    })
};

export const editContact = (id, contact) => ({
    type: ActionsTypes.EDIT,
    payload: {id, contact}
});