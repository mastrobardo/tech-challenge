import React from 'react'
import * as Actions from '../../redux/reducers/actions';

const DumbContact = props => {

  return (
    <li key={props.id * 9}>
      <div onClick={props.onClick} className={props.selected ? 'selected' : ''} className='contact'>
        <form name={'form' + props.id} onSubmit={e => {
          e.preventDefault();
        }}>
          <ul className=''>
            <li className='contact-read--name Input group'>
              <input id={'name' + props.id} className="Input-text"
                placeholder="Your first name, e.g. Nicholas"
                required name='name' disabled={!props.selected} defaultValue={''} />
              {/* <label htmlFor="name" className="Input-label">Name</label> */}
              <div className='bar'></div>
            </li>
            <li className='contact-read--surname group'>
              <input id={'surname' + props.id} className="Input-text"
                placeholder="Your , e.g. Rossi" required name='surname'
                disabled={!props.selected} defaultValue={''} />
              {/* <label htmlFor="name">SurName</label> */}
              <div className="bar"></div>
            </li>
            <li className='contact-read--email group'>
              <input id={'email' + props.id} className="Input-text" name='email' type='email'
                placeholder="Your email name, e.g. email@server.example"
                required
                // pattern="[a-zA-Z]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,}"
                disabled={!props.selected} defaultValue={''} />
              {/* <label htmlFor="email" className="Input-label">Email</label> */}
              <div className="bar"></div>
            </li>
            <li className='contact-read--country'> {props.country} </li>

            <li className={props.selected ? '' : 'hidden'}>
              <button onClick={props.onEdit} type="submit" value='Save' >SAVE</button >
              <input onClick={props.onDelete} type="button" value='DELETE' />
            </li>

          </ul>
        </form>
      </div>
    </li>
  )
}

export default DumbContact