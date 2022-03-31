import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const api = "quoteAPI"
const path_makes = '/makes'; 
const path_models = '/models'; 
const path_trims = '/trims'; 

const App = () => {
  const [input, setInput] = useState("")
  const [makes, setMakes] = useState([])

  //Function to fetch from our backend and update customers array
  function getMakes(e) {
    let year = e.input
    const myInit = { // OPTIONAL
      headers: {}, // OPTIONAL
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      queryStringParameters: {  // OPTIONAL
          name: 'param',
      }
    }

    API.get(api, path_makes + "/" + year, myInit)
       .then(res => {
         console.log(res)
         let newMakes = [...makes]
         newMakes.push(res)
         setMakes(newMakes)

       })
       .catch(error => {
         console.log(error)
       })
  }

  return (
    
    <div className="App">
      <h1>Super Simple React App</h1>
      <div>
          <input placeholder="Select A Year" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>      
      </div>
      <br/>
      <button onClick={() => getMakes({input})}>Get Makes</button>

      <h2 style={{visibility: makes.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
      {
       makes.map((thisMake, index) => {
         return (
        <div key={thisMake.Id}>
          <span><b>MakeId:</b> {thisMake.Id} - <b>Make</b>: {thisMake.Name}</span>
        </div>)
       })
      }
    </div>
  )
}

export default App;