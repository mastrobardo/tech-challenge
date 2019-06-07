import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../redux/reducers/actions'
import DumbContact from './DumbContact'
import store from '../../redux/store'
const mapStateToProps = state => {
    return {
        state: state
    }
};
const getContacts = (id) => {
    let form = document.getElementById('form' + id);
    const name = form.name.value;
    const surname = form.surname.value;
    const email = form.email.value;
    return {name, surname, email}
}
const ContactList = (props) => {
    let {state, dispatch} = props;
    return (
        <div className='contacts'>
            <h1>You Have {state ? state.contacts.length : 'No'} Contacts</h1>
            <div className='btn-container'>
                <button className='btn btn-delta' id='btn-add' onClick={() => (store.dispatch(actions.addContact({})))}>+</button>
            </div>
            <ul>
                {
                    Object.keys(state.contacts).map((item, i) => {
                        let myID = state.contacts[item].id;
                        return (
                            <DumbContact
                                key={i * i}
                                {...state.contacts[item]}
                                selected={state.currentSelected === myID}
                                countries={store.getState().countries}
                                onClick={
                                    () => {event.stopPropagation(); dispatch(actions.selectContact(myID))}
                                }
                                onDelete={
                                    event => {event.stopPropagation(); dispatch(actions.deleteContact(myID))}
                                }
                                onEdit={
                                    event => {store.dispatch(actions.editContact(myID, getContacts(myID)))}
                                }
                            >
                                {state.contacts[item].name}
                            </DumbContact>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(ContactList)