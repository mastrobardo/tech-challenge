import React from 'react'
import * as Actions from '../../redux/reducers/actions';

const DumbContact = props => {
  console.log(props.name)
  return (
    <li key={props.id * 3}>
      <div onClick={props.onClick} className={props.selected ? 'selected' : ''}>
        <ul>
          <li className='contact-read--name'>
            <input disabled={!props.selected} defaultValue={props.name} />
          </li>
          <li className={props.selected ? '' : 'hidden'}>

            <button onClick={props.onDelete}>DELETE</button>
          </li>

        </ul>
      </div>
    </li>
  )
}

export default DumbContact