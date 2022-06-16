import React, {useState, useEffect} from "react";
import DropDown from '../compontents/DropDown';
import Country from "../compontents/Country";
import './CountriesContainers.css';
import CountryForm from "../compontents/CountryForm";
import CountryList from "../compontents/CountryList";



const CountriesContainers = () => {
  
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const[favouriteCountries, setFavouriteCountries] = useState([]);

    useEffect(() => {
        getCountries();
      }, [])


 
      

    const onCountriesSelect = (countries) => {
      setSelectedCountry(countries);
    }

    const totalPopulation = countries.reduce((total,Country) => {
      return total+ Country.population
    }, 0);

    const getCountries = ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries));
      
    }
    const addFavourite = (newFavourite) => {
       const listCopy = [...countries, newFavourite]
       setFavouriteCountries(listCopy);

    }

    return(
        <div>
            
            <CountryList favouriteCountries={favouriteCountries}/>
            <CountryForm addFavourite={addFavourite}/>
        <p>Total Population: {totalPopulation}</p>
        <DropDown countries={countries} onCountriesSelect={onCountriesSelect}/>
        {selectedCountry ? <Country country={selectedCountry}/> : null}
        </div>
    );


}

export default CountriesContainers;