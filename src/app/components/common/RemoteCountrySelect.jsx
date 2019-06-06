import countries from '../../redux/reducers/constants';

const RemoteCountrySelect = props => {
    return (
        <select className='country'>
            {
                countries.map(item => {
                    return <option value={item.name}>{item.name}</option>
                })
            }
        </select>
    )

}

export default RemoteCountrySelect