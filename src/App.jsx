
import './App.css'
import { useState } from 'react'
import SearchBar from './components/Molecules/Searchbar'
import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'
import Home from './pages/Home'
import Button from './components/Atoms/Button'
import Herosection from './components/organisms/Herosection'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
        <Header />
        <main className='content'>
          <Home />
        </main>
    
        <Footer />

      </div>
    </>
  )
}

export default App
