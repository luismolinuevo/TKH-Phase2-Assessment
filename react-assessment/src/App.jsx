import { useState } from 'react'
import './App.css'
import useSWR from "swr"
const fetcher = (...args) => fetch(...args).then(res => res.json());

function App() {
  const { data, error } = useSWR('https://pokeapi.co/api/v2/pokemon/', fetcher)

  console.log(data)
  
  if (error) {
    return <div>Failed to load</div>;
  }

  // if (!data) {      
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="App">
      <ul>
        {data ? data.results.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        )) : <p>Loading</p>}
      </ul>
    </div>
  )
}

export default App
