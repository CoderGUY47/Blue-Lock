import React from 'react'

const SelectedPlayers = () => {
  return (
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-12 gap-x-8 justify-items-center max-w-[88%] mx-auto py-12 px-4">
            {/* {playersData.map((player) => (
              <PlayerCard key={player.playerName} player={player} />
            ))} */}
            <span className="w-full flex justify-center items-center">
              <h1 className='text-9xl text-white'>No Players Selected</h1>
            </span>
          </div>
        </div>
  )
}

export default SelectedPlayers