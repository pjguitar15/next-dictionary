import React from 'react'

const Badge = ({ name, color }: { name: string; color: string }) => {
  return (
    <span
      className={`uppercase text-xs 
      ${color === 'green' && 'bg-green-500'} 
      ${color === 'blue' && 'bg-blue-500'} 
      ${color === 'yellow' && 'bg-yellow-500'} 
      ${color === 'black' && 'bg-black'} 
      ${
        color === 'red' && 'bg-red-500'
      } px-2 py-1 rounded-md font-semibold text-white`}
    >
      {name}
    </span>
  )
}

export default Badge
