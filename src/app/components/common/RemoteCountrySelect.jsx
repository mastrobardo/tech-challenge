import React from 'react'
const RemoteCountrySelect = props => {
    return (
        <div className='custom-dropdown' >
            <select value={props.country}
                onChange={
                    e => {
                        props.onChange(e)
                    }
                }
                className='country' name='country' >
                {
                    props.countries.map(item => {
                        return < option key={Math.random()} value={item.name}>{item.name}</option>
                    })
                }
            </select>
        </div >
    )
}
export default RemoteCountrySelect