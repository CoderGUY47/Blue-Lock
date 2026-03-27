import React, { use, useState } from 'react'
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers'
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers'

const page = ({playerPromise, setCoin, coin}) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const playersData = use(playerPromise)
  console.log(playersData)
  const [selectedType, setSelectedType] = useState("available")



  return (
    <>
    <div className='w-[88%] mx-auto flex flex-col md:flex-row items-center justify-between mt-10 mb-0 md:-mb-10 pb-4 gap-6 md:gap-0'>
      <div className="text-center md:text-left">
        {selectedType === "available" ? 
        <h2 className='text-xl md:text-3xl font-bold text-white tracking-wide'>Available Players: <span className="text-blue-500 font-black">{playersData.length - selectedPlayers.length}</span></h2> : 
        <h2 className='text-xl md:text-3xl font-bold text-white tracking-wide'>Selected Players: <span className="text-blue-500 font-black">{selectedPlayers.length}</span></h2>}
      </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSelectedType("available")}
            className={`btn border-0 rounded-full font-semibold text-sm md:text-lg px-6 md:px-8 h-10 md:h-14 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white transition-all duration-300 ${
              selectedType === "available" 
                ? "bg-black/40 backdrop-blur-2xl hover:bg-black/50" 
                : "bg-white/10 backdrop-blur-2xl hover:bg-white/20"
            }`}
          >
            Available
          </button>
          
          <button 
            onClick={() => setSelectedType("selected")}
            className={`btn border-0 rounded-full font-semibold text-sm md:text-lg px-6 md:px-8 h-10 md:h-14 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white transition-all duration-300 ${
              selectedType === "selected" 
                ? "bg-black/40 backdrop-blur-2xl hover:bg-black/50" 
                : "bg-white/10 backdrop-blur-2xl hover:bg-white/20"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
    </div>
    <div className="container mx-auto"> 
      {selectedType === "available" ? 
      <AvailablePlayers
        playersData={playersData}
        setCoin={setCoin}
        coin={coin}
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
      /> : 
      <SelectedPlayers 
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
        setCoin={setCoin}
        coin={coin}
      />}
    </div>
    </>
  )
}

export default page