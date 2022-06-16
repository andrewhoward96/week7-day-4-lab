import React, {useState} from "react";



const CountryForm = ({addFavourite}) => {
  
    const [country, setCountry] = useState("");
    
    const handleCountry = (event) => {
        setCountry(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        const newCountry = country.trim();
        if(!newCountry) {
            return 
        }

        const newFavoutiteCountry = {country: newCountry}
        addFavourite(newFavoutiteCountry);

        setCountry("");

    }

    return(
        <form onSubmit={handleSubmit}>
      <label htmlFor="new-country"></label>
      <input id="new-country" type="text" value={country} onChange={handleCountry} />
      <input type="submit" value="add favourite"/>
      </form>
    )


}


export default CountryForm;