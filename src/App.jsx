
import './App.css'
import { useState } from 'react'
import SearchBar from './components/Molecules/Searchbar'
import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'
import Home from './pages/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
     <Header/>
      <Home/>
     <Footer/>

      </div>
    </>
  )
}

export default App
