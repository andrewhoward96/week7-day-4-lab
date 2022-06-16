import React from "react";
import Country from "./Country";

const CountryList = ({favouriteCountries}) => {
  const countryNodes = favouriteCountries.map((country, index) => {
    return(
        <Country country={country} key={index.id} />
    )
  })

  return(
    <div>
    {countryNodes}
    </div>
  )


}


export default CountryList;