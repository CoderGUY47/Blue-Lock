import React from 'react'
import PlayerCard from '../PlayerCard/page'

const AvailablePlayers = ({ playersData, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    
    const filteredAvailablePlayers = playersData.filter(player => 
        !selectedPlayers.some(selectedPlayer => 
        selectedPlayer.playerName === player.playerName)); 
    console.log(filteredAvailablePlayers, "filteredAvailablePlayers")
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8 justify-items-center max-w-[1600px] mx-auto py-12 px-4">
        {filteredAvailablePlayers.map((player) => (
          <PlayerCard 
            key={player.playerName} 
            player={player}
            setCoin={setCoin}
            coin={coin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            view="available"
          />
        ))}
      </div>
    </div>
  )
}

export default AvailablePlayers