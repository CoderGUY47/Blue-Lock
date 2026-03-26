import React from 'react'
import { CircleDollarSign, Trophy, Users, Home } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='sticky top-6 z-50 mb-10 w-full px-2'>
      <div className="navbar bg-black/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] py-4 px-6 md:px-10 transition-all duration-500 hover:border-blue-500/30">
        
        <div className="flex-1">
          <a className="transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
            <div className="relative group">
               <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <img className='w-48 md:w-60 rounded-xl transition-all brightness-110 drop-shadow-lg' src="/Blue_Lock_anime_logo.svg" alt="Blue Lock Logo" />
            </div>
          </a>
        </div>

        <div className="flex-none flex items-center">
          <div className="group relative">
            <button className="relative flex items-center gap-4 bg-white/5 border border-white/10 rounded-3xl px-5 py-2 transition-all hover:bg-white/10 hover:border-yellow-500/40 active:scale-95">
                <div className="flex items-center">
                    <span className='text-3xl md:text-4xl font-bold text-white leading-none' id='money-count'>0</span>
                </div>
                <div className="p-1 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 shadow-xl shadow-yellow-500/20">
                    <CircleDollarSign className='text-black h-7 w-7 md:h-9 md:w-9' />
                </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar