import React from "react";
import './Country.css';


const Country = ({country}) => {
  return(
    <div>
    <h3>{country.name.common}</h3>
    <p>Capital: {country.capital}</p>
    
    </div>
  )
  
  
}



export default Country;