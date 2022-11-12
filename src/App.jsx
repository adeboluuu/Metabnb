import { Routes, Route } from 'react-router-dom'
import './assets/styles.css'
import Home from './components/Home'
import Nft from './components/Nft'

function App() {
 

  return (
    <>
    <Routes>
    <Route path ='/' element={ <Home/> }/>
    </Routes>
    </>
  )
}

export default App
