import './App.css'
import Navbar from './components/Navbar/page'
import Banner from './components/Banner/page'
import Players from './components/Players/page'
import { Suspense, useState } from 'react'

const fetchPlayerData = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const res = await fetch("/playersData.json");
  return res.json();
}

const playerPromise = fetchPlayerData();

function App() {
  const [coin, setCoin] = useState(369999000);

  return (
    <>
      <Navbar coin={coin} />
      <Banner />
      <Suspense fallback={
        <div className="flex items-center justify-center py-20">
          <div className="text-white/80 text-6xl font-bebas font-black italic tracking-widest animate-pulse">0...LOADING PLAYERS...0</div>
        </div>
      }>
        <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin}/>
      </Suspense>
    </>
  )
}

export default App
