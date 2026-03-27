import React from 'react'

const Banner = () => {
  return (
    <div className='relative w-[88%] h-full mb-2 mx-auto flex items-center justify-center'>
      <div className="relative w-full h-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center p-4 md:p-8 group">
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <img className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-50' src="/Blue-banner.jpg" alt="Banner Background"/>
            {/*/////======== image filter ========\\\\\\\*/}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2 md:p-6 rounded-3xl transition-all duration-500">
           <div className="relative mb-0 transform transition-transform duration-500 hover:scale-105 active:scale-95 cursor-pointer">
              <div className="absolute -inset-10 -z-10"></div>
               <img src="/Blue-Lock-logo.png" alt="Blue Lock Logo" className="w-44 sm:w-60 md:w-80 drop-shadow-2xl" />
           </div>
           
           <h1 className="text-white text-2xl md:text-5xl font-bold mb-2 drop-shadow-2xl tracking-wide leading-tighter">
             Assemble Your Ultimate <br />
             <span className="font-black text-3xl md:text-6xl bg-linear-to-tr from-blue-600 to-sky-400 bg-clip-text text-transparent">Blue Lock Dream 11</span>
           </h1>

           <p className="text-white/60 text-xs sm:text-base md:text-lg font-semibold pt-1 md:pt-2 mb-3 tracking-widest uppercase max-w-3xl drop-shadow-md">
             Devour your rivals to become the World's Best Striker
           </p>

           <div className="relative group/btn">
               <button className="relative px-6 py-3 md:px-12 md:py-5 bg-linear-to-tl from-blue-700 to-indigo-600
                hover:from-indigo-800 hover:to-blue-600 text-white text-lg md:text-2xl font-bold rounded-xl transition-all duration-700 border-none">
                 Start Your Selection
               </button>
           </div>
        </div>
        
        {/*/////======== blurry bottom effect ========\\\\\\\*/}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xs pointer-events-none -z-10"></div>
      </div>
    </div>
  )
}

export default Banner