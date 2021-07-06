import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DrinkCard = () => {
  const [drinks, setDrinks] = useState([])

  const getShows = async () => {
    const response = await axios.get(
      'www.thecocktaildb.com/api/json/v1/1/search.php?s'
    )
    setDrinks(response.data.drinks)
  }

  useEffect(() => {
    getShows()
  }, [])

  let drinkList = drinks.map((show) => {
    return (
      <div data-cy="drink-card">
        <img src={show.strDrinkThumb} alt="drinks" />
      </div>
    )
  })

  return <div>{drinkList}</div>
}

export default DrinkCard
