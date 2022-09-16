import {useState} from 'react'
import './App.css';
import { api, url } from './config';

function App() {
  const [id, setId] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      id
    }
    console.log(user)
  }

  const qrcode = (url + api + `${id}`)

  return (
    <form  onSubmit={handleSubmit} className="App">
      <input type="text" placeholder='Seu Id' onChange={(e) => setId(e.target.value)}/>
      <img src={qrcode}></img>
      <p>{id}</p>
    </form>
  );
}

export default App;
