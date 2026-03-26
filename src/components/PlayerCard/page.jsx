import { useState } from "react";

const getTierConfig = (rating) => {
  if (rating >= 90) {
    return {
      name: "PLATINUM",
      textColor: "text-purple-400",
      bgGradientTop: "from-purple-400 to-indigo-700",
      bgGradientLine:
        "bg-gradient-to-r from-transparent via-purple-400 to-transparent",
      bgRing: "bg-gradient-to-br from-purple-500 to-purple-700 border-2 border-white/10",
      shadow: "shadow-lg shadow-purple-500/40",
      cardBg: "to-purple-950/80",
    };
  }
  if (rating >= 80) {
    return {
      name: "GOLD",
      textColor: "text-yellow-400",
      bgGradientTop: "from-yellow-400 to-orange-700",
      bgGradientLine:
        "bg-gradient-to-r from-transparent via-yellow-400 to-transparent",
      bgRing: "bg-gradient-to-br from-orange-700 via-yellow-500 to-yellow-700 border-2 border-white/10",  
      shadow: "shadow-lg shadow-yellow-500/30",
      cardBg: "to-yellow-950/80",
    };
  }
  if (rating >= 70) {
    return {
      name: "SILVER",
      textColor: "text-stone-300",
      bgGradientTop: "from-stone-300 to-stone-500",
      bgGradientLine:
        "bg-gradient-to-r from-transparent via-stone-300 to-transparent",
      bgRing: "bg-gradient-to-br from-stone-300 via-transparent to-stone-300",
      shadow: "shadow-lg shadow-stone-300/20",
      cardBg: "to-stone-900/80",
    };
  }
  return {
    name: "BRONZE",
    textColor: "text-orange-500",
    bgGradientTop: "from-orange-500 to-orange-800",
    bgGradientLine:
      "bg-gradient-to-r from-transparent via-orange-500 to-transparent",
    bgRing: "bg-gradient-to-br from-orange-500 via-transparent to-orange-500",
    shadow: "shadow-lg shadow-orange-500/15",
    cardBg: "to-orange-950/80",
  };
};

const defaultPlayer = {
  playerName: "Yoichi Isagi",
  role: "Forward",
  rating: 93,
  specialty: "Spatial Awareness",
  strongFoot: "Right Foot",
  price: 25000000,
  image: "/assets/images/players/yoichi_isagi.png",
};

export default function PlayerCard({ player = defaultPlayer }) {
  const [flipped, setFlipped] = useState(false);
  const [imgError, setImgError] = useState(false);

  const tier = getTierConfig(player.rating);

  const initials = player.playerName
    .split(" ")
    .map((n) => n[0])
    .join("");

  const formattedPrice =
    player.price === 0
      ? "Non-Transfer"
      : `$${(player.price / 1000000).toFixed(1)}M`;

  return (
    <div className="flex justify-center items-center group">
      <div
        className="relative w-[350px] h-[550px] cursor-pointer perspective-1200"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 preserve-3d ${flipped ? "rotate-y-180" : ""}`}
        >
          <div
            className={`absolute inset-0 w-full h-full rounded-[32px] overflow-hidden flex flex-col border border-white/10 backface-hidden bg-gradient-to-b from-slate-900 ${tier.cardBg} shadow-2xl ${tier.shadow}`}
          >
            <div
              className={`absolute top-0 left-0 right-0 h-[4px] ${tier.bgGradientLine}`}
            />

            {/* Top Section */}
            <div className="relative pt-6 px-8 flex flex-col items-center text-center">
              <div className="w-full flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] text-white tracking-[0.5px] bg-gradient-to-br ${tier.bgGradientTop} font-bebas`}
                  >
                    <img src="/Blue-Lock-logo.png " alt="" className="object-cover bg-white w-14 h-8 rounded-full"/>
                  </div>
                  <span className="text-xs tracking-[3px] text-white/70 font-bold uppercase">
                    Blue Lock
                  </span>
                </div>

                <div
                  className={`rounded-[20px] py-[6px] px-[14px] flex items-baseline gap-[3px] bg-gradient-to-br ${tier.bgGradientTop}`}
                >
                  <span className="font-bebas text-white text-2xl leading-none">
                    {player.rating}
                  </span>
                  <span className="text-xs font-semibold text-white tracking-tight uppercase">
                    Power
                  </span>
                </div>
              </div>

              {/* Avatar Ring */}
              <div
                className={`w-[190px] h-[190px] rounded-full p-1 mb-3 ${tier.bgRing}`}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden border-0">
                  {!imgError ? (
                    <img
                      src={player.image}
                      alt={player.playerName}
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <span
                      className={`font-bebas text-5xl ${tier.textColor}`}
                    >
                      {initials}
                    </span>
                  )}
                </div>
              </div>

              {/* Player Name & Role */}
              <h2 className="font-black font-outfit text-xl tracking-[2px] text-stone-100 uppercase mb-2.5 leading-none">
                {player.playerName}
              </h2>
              <p
                className={`text-sm tracking-wider uppercase mb-4 ${tier.textColor} font-bold`}
              >
                {player.specialty}
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Bottom Section */}
            <div className="p-6 pt-6 pb-8 mt-auto">
              <div className="grid grid-cols-[1fr_1px_1fr_1px_1fr] items-center gap-3 mb-6">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-bebas text-lg tracking-[1px] text-stone-100 uppercase">
                    {player.role}
                  </span>
                  <span className="text-[9px] tracking-[2px] text-white/30 font-semibold uppercase">
                    Role
                  </span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-bebas text-lg tracking-[1px] text-stone-100 uppercase">
                    {player.strongFoot.split(" ")[0]}
                  </span>
                  <span className="text-[9px] tracking-[2px] text-white/30 font-semibold uppercase">
                    Foot
                  </span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-bebas text-lg tracking-[1px] text-stone-100 uppercase">
                    {player.rating}
                  </span>
                  <span className="text-[9px] tracking-[2px] text-white/30 font-semibold uppercase">
                    Rating
                  </span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[16px] px-5 py-3 flex justify-between items-center">
                <span className="text-xs tracking-wide text-white/70 uppercase font-semibold">
                  Market Value
                </span>
                <span
                  className={`font-outfit text-base font-bold tracking-[1px] ${tier.textColor}`}
                >
                  {formattedPrice}
                </span>
              </div>
            </div>
          </div>

          {/* ══════════ BACK FACE ══════════ */}
          <div
            className={`absolute inset-0 w-full h-full rounded-[32px] overflow-hidden flex flex-col border border-white/10 backface-hidden rotate-y-180 bg-gradient-to-b from-slate-900 ${tier.cardBg} shadow-2xl ${tier.shadow}`}
          >
            <div className="font-outfit p-10 h-full flex flex-col">
              <div className="mb-[30px]">
                <div
                  className={`text-[10px] font-black tracking-[4px] mb-2 ${tier.textColor}`}
                >
                  {tier.name} · PLAYER DETAILS
                </div>
                <h3 className="text-2xl text-white uppercase not-italic">
                  {player.playerName}
                </h3>
              </div>

              <div>
                <div className="mb-5 pb-3 border-b border-white/5">
                  <span className="block text-[9px] uppercase tracking-[3px] text-white/30 mb-1">
                    Position
                  </span>
                  <span className="text-base text-white not-italic">
                    {player.role}
                  </span>
                </div>
                <div className="mb-5 pb-3 border-b border-white/5">
                  <span className="block text-[9px] uppercase tracking-[3px] text-white/30 mb-1">
                    Primary Specialty
                  </span>
                  <span className="text-base text-white not-italic">
                    {player.specialty}
                  </span>
                </div>
                <div className="mb-5 pb-3 border-b border-white/5">
                  <span className="block text-[9px] uppercase tracking-[3px] text-white/30 mb-1">
                    Preferred Foot
                  </span>
                  <span className="text-base text-white not-italic">
                    {player.strongFoot}
                  </span>
                </div>
                <div className="mb-5 pb-3 border-b border-white/5">
                  <span className="block text-[9px] uppercase tracking-[3px] text-white/30 mb-1">
                    Transfer Fee
                  </span>
                  <span className="text-base text-white not-italic">
                    {formattedPrice}
                  </span>
                </div>
              </div>

              <button
                className={`mt-auto w-full p-[18px] rounded-[16px] text-white text-[14px] tracking-[4px] uppercase border-none cursor-pointer transition-transform active:scale-95 bg-gradient-to-br ${tier.bgGradientTop} font-outfit`}
                onClick={(e) => e.stopPropagation()}
              >
                Choose Player
              </button>

              <p className="text-center text-[8px] mt-4 font-bold text-white/20 tracking-widest uppercase">
                Click to flip back
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
