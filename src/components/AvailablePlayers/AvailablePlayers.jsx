import React from 'react'
import PlayerCard from '../PlayerCard/page'

const AvailablePlayers = ({ playersData, setCoin, coin }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-12 gap-x-8 justify-items-center max-w-[1600px] mx-auto py-12 px-4">
        {playersData.map((player) => (
          <PlayerCard key={player.playerName} player={player} setCoin={setCoin} coin={coin}/>
        ))}
      </div>
    </div>
  )
}

export default AvailablePlayers