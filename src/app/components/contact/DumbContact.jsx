import React from 'react'
import * as Actions from '../../redux/reducers/actions';
import RemoteCountrySelect from './../common/RemoteCountrySelect'

const DumbContact = props => {
  const myFunction = () => {}
  return (
    <li key={props.id}>
      <div onClick={props.onClick} className={props.selected ? 'container contact selected' : 'container contact'} >
        <form autoComplete="off" name={'form' + props.id} id={'form' + props.id} onSubmit={e => {
          e.preventDefault()
          if (e.currentTarget.checkValidity()) {
            //NOTHING should ever use fe validation, only sanitization
            //now, it is not really needed
            //https://twitter.com/XssPayloads  for some examples
            props.onEdit();
          }
          return false
        }}>
          <fieldset>
            <input id={'name' + props.id} className="Input-text" type='text'
              placeholder="Your first name, e.g. Nicholas"
              // pattern="[a-zA-Z]"
              name='name' required disabled={!props.selected} defaultValue={props.name} />
          </fieldset>
          <fieldset>
            <input id={'surname' + props.id} type='text'
              placeholder="Your , e.g. Ro
              ￼SAVE￼DELETEssi"
              // pattern="[a-zA-Z]"
              required name='surname'
              disabled={!props.selected} defaultValue={props.surname} />
          </fieldset>
          <fieldset>
            <input id={'email' + props.id} className="Input-text"
              name='email' type='email'
              placeholder="Your email name, e.g. email@server.example"
              required
              // pattern="[a-zA-Z]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,}"
              disabled={!props.selected} defaultValue={props.email} />
          </fieldset>
          <fieldset>
            <RemoteCountrySelect countries={props.countries} 
                                  selected={props.selected}
                                  country={props.country}
                                  onChange={props.onSelect} >
             </RemoteCountrySelect>
          </fieldset>
          <div className={props.selected ? '' : 'hidden'}>
            <input type="submit" value='Save' className='btn btn-alpha' />
            <input onClick={props.onDelete} type="button" value='DELETE' className='btn btn-alpha' />
          </div>
        </form>
      </div>
    </li >
  )
}

export default DumbContact