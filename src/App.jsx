
import './App.css'
import { useState } from 'react'
import SearchBar from './components/Molecules/Searchbar'
import Header from './components/organisms/Header'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
     <Header/>
      </div>
    </>
  )
}

export default App
