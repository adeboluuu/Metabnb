import { Routes, Route } from 'react-router-dom'
import './assets/styles.css'
import Home from './components/Home'
import Placetostay from './components/Placetostay'

function App() {
 

  return (
    <>
    <Routes>
    <Route path ='/' element={ <Home/> }/>
    <Route path ='/place-to-stay' element={ <Placetostay/> }/>
    </Routes>
    </>
  )
}

export default App
