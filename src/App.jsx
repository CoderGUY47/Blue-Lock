import './App.css'
import Navbar from './components/Navbar/page'
import Banner from './components/Banner/page'
import Players from './components/Players/page'
import { Suspense } from 'react'

const fetchPlayerData = async () => {
  const res = await fetch("/playersData.json")
  return res.json()
}

function App() {
  const playerPromise = fetchPlayerData()

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={
        <div className="flex items-center justify-center py-20">
          <div className="text-white/50 text-xl font-bold tracking-widest animate-pulse">LOADING PLAYERS...</div>
        </div>
      }>
        <Players playerPromise={playerPromise} />
      </Suspense>
    </>
  )
}

export default App
