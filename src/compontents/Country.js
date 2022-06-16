import React from "react";
import './Country.css';


const Country = ({country, addFavouriteCountry}) => {
  return(
    <div>
    <h3>{country.name.common}</h3>
    <p>Capital: {country.capital}</p>
    <button onClick={addFavouriteCountry}>add Favourite</button>
    </div>
  )
  
  
}



export default Country;