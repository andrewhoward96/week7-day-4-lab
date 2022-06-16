import React from "react";

const DropDown = ({countries, onCountriesSelect}) => {
    const handleSelect = (event) => {
    const chosenIndex = event.target.value;
    const chosenCountry = countries[chosenIndex];
    onCountriesSelect(chosenCountry);
    }
   
    const options = countries.map((country, index) => {
        return <option key={index} value={index}>{country.name.common}</option>

    })
    return(
        <select onChange={handleSelect}>
        <option disabled value="">selectedCountry</option>
        {options}
        </select>
    )

}

export default DropDown;