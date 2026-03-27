import './App.css'
import Navbar from './components/Navbar/page'
import Banner from './components/Banner/page'
import Players from './components/Players/page'
import AnalysisChartsPage from './components/AnalysisCharts/AnalysisChartsPage'
import { Suspense, useState } from 'react'

const fetchPlayerData = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const res = await fetch("/playersData.json");
  return res.json();
}

const playerPromise = fetchPlayerData();

function App() {
  const [coin, setCoin] = useState(369999000);
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Navbar coin={coin} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <Banner />}
      
      <Suspense fallback={
        <div className="flex items-center justify-center py-20 px-4 text-center">
          <div className="text-white/80 text-2xl sm:text-4xl md:text-6xl font-bebas font-black italic tracking-widest animate-pulse leading-none uppercase">0...LOADING PLAYERS...0</div>
        </div>
      }>
        {currentPage === 'home' ? (
          <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin}/>
        ) : (
          <AnalysisChartsPage playerPromise={playerPromise} />
        )}
      </Suspense>
    </>
  )
}

export default App

