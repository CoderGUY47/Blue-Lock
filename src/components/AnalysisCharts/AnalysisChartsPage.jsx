import React, { use } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { ArrowLeft } from 'lucide-react';

const AnalysisChartsPage = ({ playerPromise }) => {
  const playersData = use(playerPromise);

  // process data for the chart
  const chartData = playersData.map(player => ({
    name: player.playerName,
    power: player.rating,
  }));

  const margin = {
    top: 20,
    right: 30,
    left: 20,
    bottom: 60, // more space for labels
  };

  return (
    <div className='w-[88%] mx-auto mt-20 mb-20'>
      <div className="flex flex-col items-center justify-center p-12 border border-white/5 rounded-[40px] bg-black/20 backdrop-blur-3xl shadow-2xl mb-12">
        <h2 className="text-white text-5xl font-black font-bebas tracking-wider uppercase italic mb-8">
          Player <span className="text-blue-500">Analytics</span>
        </h2>
        
        <div className="w-full h-[600px] bg-white/5 rounded-3xl p-8 border border-white/5">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={margin}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="#ffffff40" 
                angle={-45} 
                textAnchor="end" 
                interval={0}
                fontSize={10}
                tick={{ fill: '#ffffff60' }}
              />
              <YAxis 
                stroke="#ffffff40" 
                tick={{ fill: '#ffffff60' }}
                domain={[0, 100]}
              />
              <Tooltip 
                cursor={{ fill: '#ffffff05' }}
                contentStyle={{ 
                  backgroundColor: '#000000dd', 
                  border: '1px solid #ffffff10',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  color: '#fff'
                }}
                itemStyle={{ color: '#3b82f6' }}
              />
              <Bar dataKey="power" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={`hsl(${(index * 360) / chartData.length}, 70%, 50%)`} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default AnalysisChartsPage