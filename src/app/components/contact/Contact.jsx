import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../redux/reducers/actions';

const Contact = ({state, action}) => {
  return (
    <div>
      <span> x </span>
    </div>
  )
}
const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})


export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Contact)