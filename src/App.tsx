import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'

export default function App(){
  return(
    <BrowserRouter>
      <div className='container'>
        <Header />
        <NavBar />
      </div>
    </BrowserRouter>
  )
}