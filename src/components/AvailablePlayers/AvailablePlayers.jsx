import React, { useState } from "react";
import PlayerCard from "../PlayerCard/page";
import Pagination from "../Pagination/page";

const AvailablePlayers = ({
  playersData,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  const filteredAvailablePlayers = playersData.filter(
    (player) =>
      !selectedPlayers.some(
        (selectedPlayer) => selectedPlayer.playerName === player.playerName,
      ),
  );

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredAvailablePlayers.slice(itemOffset, endOffset);

  const handlePageChange = (event) => {
    // Avoid calculation issues if list empty
    if (filteredAvailablePlayers.length === 0) return;

    const newOffset = (event.selected * itemsPerPage) % filteredAvailablePlayers.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8 justify-items-center max-w-[1600px] mx-auto py-12 px-4 w-full">
        {currentItems.map((player) => (
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

      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={filteredAvailablePlayers.length} 
        onPageChange={handlePageChange}
        currentOffset={itemOffset}
      />
    </div>
  );
};

export default AvailablePlayers;

