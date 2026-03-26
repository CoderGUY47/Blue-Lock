import React, { use, useState } from 'react'
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers'

const page = ({playerPromise}) => {
  const playersData = use(playerPromise)
  console.log(playersData)
  const [selectedType, setSelectedType] = useState("available")



  return (
    <>
    <div className='w-[88%] mx-auto flex justify-between mt-20'>
        <h2 className='text-2xl font-bold text-center mb-6 text-white'>Available Players ({playersData.length})</h2>
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
      <AvailablePlayers playersData={playersData}/>
    </div>
    </>
  )
}

export default page