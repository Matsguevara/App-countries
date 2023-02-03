import React from 'react'
import "./styles/CountryCard.css"

const CountryCard = ({country}) => {
  return (
    <article className='countryCard'>
              <div className='countryCard__img'>
                <img src={country.flags.svg} alt={country.flags.alt} />
              </div>
              <section className='countrycard__info'>
                <h3 className='countrycard__name'>{country.name.common}</h3>
                <ul className='countrycard__list'>
                  <li className='countrycard__item'><span>Population:</span>{country.population}</li>
                  <li className='countrycard__item'><span>Region:</span>{country.region}</li>
                  <li className='countrycard__item'><span>Capital:</span>{country.capital}</li>
                </ul>
              </section>
            </article>
  )
}

export default CountryCard