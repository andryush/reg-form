import React from 'react';
import './Info.css';
import countries from '../../data/countries';

function countryHelper(data, id) {
    const filtered = data.filter((el) => el.id === parseInt(id));
    console.log(filtered);
    return filtered[0].name;
}

function Info(props){
    const {avatar, firstname, lastname, email, mobile, country, city} = props;
    return(
        <div>
            <div className="first-info">
                <img src={avatar} alt="avatar" className="final-avatar"/>
                <div className="name">
                    <p>{firstname} {lastname}</p>
                </div>
            </div>
            <div className="second-info">
                <div><p><span>Email: </span>{email}</p></div>
                <div><p><span>Mobile: </span>{mobile}</p></div>
                <div><p><span>Location: </span>{countryHelper(countries, country)}, {city}</p></div>
            </div>
        </div>
    )
}
export default Info;