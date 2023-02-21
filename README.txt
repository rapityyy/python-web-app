Step to set up Python Flask to work with React js:

1. mkdir "flask-server
2. Go inside the dir and touch "server.py"
3. Create route inside "server.py" file:
-------------------------------------------	
from flask import Flask

app = Flask(__name__)

# # Home directory 
# @app.route("/")
# def home_page():
#     return "<h1>Welcome to HomePage!</h1>"

# API Routes
@app.route("/visitors")
def visitors():
    return {"visitors" : ["v1, v2, v3"]}

if __name__ == "__main__":
    app.run(debug=True)
-------------------------------------------

4. outisde in Home directory, run "npx create-react-app client"
- it will run for 3-4 minutes and create the package inside "client" folder

5. Back inside flask-server, run:
- "python -m venv venv"
- ".\venv\Scripts\activate"
- "pip install flask"
6. Go to .\client\src\ and delete "App.test.js", "index.css", "logo.svg" files don't need
7. Edit index.js file and remove "import App from './App';"
8. Edit package.json and add "proxy": "http://localhost:5000",
9. Delete everying in App and make a new one to test:
--------------------------------------------------------
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
---------------------------------------------------------

10. At "flask-server" directory, start host server by using "python server.py"
11. Inside "client" directory, run "npm start" to start website 


-----------------------------------------------------------------------------
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    App.js
    App.css
    index.js
    components/
      ControlPanel.js
      DiscordWidget.js
