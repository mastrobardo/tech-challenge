import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../../redux/reducers/actions'
import DumbContact from './DumbContact'


const mapStateToProps = state => {
    return {
        state: state
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const ContactList = ({state, actions}) => {
    console.log('render!')



    return (
        <div className='contacts'>
            <h1>You Have {state ? state.contacts.length :'No'}  Contacts</h1>
            <ul>
                {

                    Object.keys(state.contacts).map((item, i) => {
                        return (
                            <DumbContact
                                key={i * i} {...state.contacts[item]}
                                selected={state.currentSelected === state.contacts[item].id}
                                onClick={
                                    () => {actions.selectContact(state.contacts[item].id)}
                                }
                                onDelete={
                                    event => {
                                        event.stopPropagation(); 
                                        console.log('going to delete -', state.contacts[item].id)
                                        actions.deleteContact(state.contacts[item].id)
                                    }
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
    mapDispatchToProps
)(ContactList)
