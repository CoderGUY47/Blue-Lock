import React from 'react'
import { CircleDollarSign, TrendingUp } from 'lucide-react'

const Navbar = ({coin, setCurrentPage}) => {
  return (
    <div className='sticky top-6 z-50 mb-10 w-full px-2 container mx-auto'>
      <div className="navbar bg-black/40 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] py-3 px-4 md:py-4 md:px-10 transition-all duration-500 hover:border-blue-500/30">
        <div className="flex-1">
          <a className="cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="relative group">
               <img className='w-32 sm:w-48 md:w-60 rounded-xl transition-all brightness-110 drop-shadow-lg' src="/Blue_Lock_anime_logo.svg" alt="Blue Lock Logo" />
            </div>
          </a>
        </div>

        {/* analytics */}
        <div className="flex-none flex items-center mr-5">
          <div className="group relative">
            <button 
              className="relative flex items-center gap-2 md:gap-4 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 md:px-5 md:py-2 hover:bg-white/10 transition-colors duration-300 cursor-pointer"
              onClick={() => setCurrentPage('analytics')}
            >
                <div className="flex items-center">
                    <span className='text-sm md:text-2xl font-semibold text-white leading-none' id='money-count'>Analytics</span>
                </div>
                <div className="p-1 rounded-full bg-linear-to-br from-white to-white/50 shadow-xl shadow-white/20">
                    <TrendingUp className='text-black h-4 w-4 md:h-6 md:w-6' />
                </div>
            </button>
          </div>
        </div>

        <div className="flex-none flex items-center">
          <div className="group relative">
            <button className="relative flex items-center gap-2 md:gap-4 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 md:px-5 md:py-2">
                <div className="flex items-center">
                    <span className='text-sm md:text-2xl font-semibold text-white leading-none' id='money-count'>{coin}</span>
                </div>
                <div className="p-1 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 shadow-xl shadow-yellow-500/20">
                    <CircleDollarSign className='text-black h-4 w-4 md:h-6 md:w-6' />
                </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar