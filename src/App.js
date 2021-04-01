
import './App.css';


import React from "react"
import endpoint from './endpoint';
import {useEffect,useState} from "react";



  function App() {

    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)

    
      useEffect(()=>{
        setData([])
        setLoading(true)
        setError(null)

        fetch(endpoint)
        .then((res)=>res.json())
        .then(response=>{
          setLoading(false)
          //I had to desctructure the response here and return only the store values, the values are raw values not formatted
          const dataStrings = response.data.map(({store})=> store)
          setData(dataStrings[0])
        })
        .catch(error=>{
          setLoading(false)
          setError(error)

        })
       
        
      },[])


      return (
        <div className="App">
        <header>
        <h1>Data Display</h1>
        {
          loading ? (<p>Loading.....</p>) : (
            <p>{data}</p>
          )
        }
        {error && <p>{error.message}</p>}
        </header>
      </div>
      );
    }

export default App;
    
    

