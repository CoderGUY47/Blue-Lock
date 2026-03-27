import React from 'react'
import PlayerCard from '../PlayerCard/page'

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, setCoin, coin}) => {
  return (
    <div className="w-full py-20 min-h-[400px] flex items-center justify-center">
      {selectedPlayers.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 border border-white/5 rounded-[40px] bg-black/20 w-full max-w-xl text-center">
          <h2 className="text-white/10 text-7xl md:text-8xl font-black font-bebas tracking-tighter uppercase italic select-none leading-none">
            No Players<br /> Selected
          </h2>
          <p className="text-white/40 font-outfit text-sm tracking-[3px] uppercase mt-6 font-bold border-t border-white/10 pt-6">
            Recruit your first player to continue
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8 justify-items-center max-w-[1600px] mx-auto -mt-4 px-4 w-full">
          {selectedPlayers.map((player) => (
            <PlayerCard 
              key={player.playerName} 
              player={player}
              setCoin={setCoin}
              coin={coin}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
              view="selected"
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectedPlayers
