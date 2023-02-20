import React, {useState, useEffect} from 'react'

function App(){

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/visitors").then(
        res =>res.json()
      ).then(
          data => {
            setData(data) 
            console.log(data) // Print out the data to test
          }
        )
  }, []) // [] at the end signify only runthe fetch once
  
  return (
    <div>
      
      {(typeof data.visitors === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.visitors.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}

    </div>
  )
}

export default App