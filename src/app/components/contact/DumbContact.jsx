import React from 'react'
import * as Actions from '../../redux/reducers/actions';

const DumbContact = props => {
  return (
    <li>
      <div onClick={props.onClick} className={ props.selected ? 'selected' : ''}>
        <ul>
          <li className='contact-read--name'> {props.name} </li>
          <li className='contact-read--surname'> {props.surname} </li>
          <li className='contact-read--email'> {props.email} </li>
          <li className='contact-read--country'> {props.country} </li>
        </ul>
        <button onClick={props.onDelete}>DELETE</button>
      </div>
    </li>
  )
}

export default DumbContact