import React, { use, useState } from 'react'
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers'
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers'

const page = ({playerPromise, setCoin, coin}) => {
  const playersData = use(playerPromise)
  console.log(playersData)
  const [selectedType, setSelectedType] = useState("available")



  return (
    <>
    <div className='w-[88%] mx-auto flex items-center justify-between mt-20 -mb-10 pb-4'>
      <div className="">
        {selectedType === "available" ? 
        <h2 className='text-2xl md:text-3xl font-bold text-white tracking-wide'>Available Players ({playersData.length})</h2> : 
        <h2 className='text-2xl md:text-3xl font-bold text-white tracking-wide'>Selected Players (0/{playersData.length})</h2>}
      </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSelectedType("available")}
            className={`btn border-0 rounded-full font-semibold text-lg px-8 h-14 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white transition-all duration-300 ${
              selectedType === "available" 
                ? "bg-black/40 backdrop-blur-2xl hover:bg-black/50" 
                : "bg-white/10 backdrop-blur-2xl hover:bg-white/20"
            }`}
          >
            Available
          </button>
          
          <button 
            onClick={() => setSelectedType("selected")}
            className={`btn border-0 rounded-full font-semibold text-lg px-8 h-14 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white transition-all duration-300 ${
              selectedType === "selected" 
                ? "bg-black/40 backdrop-blur-2xl hover:bg-black/50" 
                : "bg-white/10 backdrop-blur-2xl hover:bg-white/20"
            }`}
          >
            Selected (0)
          </button>
        </div>
    </div>
    <div className="container mx-auto"> 
      {selectedType === "available" ? 
      <AvailablePlayers playersData={playersData} setCoin={setCoin} coin={coin}/> : 
      <SelectedPlayers/>}
    </div>
    </>
  )
}

export default page