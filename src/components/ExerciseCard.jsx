import React from 'react'
import { Link } from 'react-router-dom'

export const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className='no-underline'>
        <div className="bg-white font-poppins flex flex-col justify-between w-[16rem] h-[27rem] sm:w-[22rem] sm:h-[26rem] border-t-4 border-primary rounded-b-[20px] pb-[10px] transition-all duration-300 ease-in-out hover:scale-110">
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='h-[326px]' />
            <div className="flex flex-row flex-wrap gap-4 ss:gap-0">
                <span className='ml-5 bg-[#ffa9a9] text-white text-sm rounded-[20px] capitalize p-2'>
                    {exercise.bodyPart}
                </span>
                <span className='ml-5 bg-[#fcc757] text-white text-sm rounded-[20px] capitalize p-2'>
                    {exercise.target}
                </span>
                <span className='ml-5 bg-blue-500 text-white text-sm rounded-[20px] capitalize p-2'>
                    {exercise.equipment}
                </span>
            </div>
            <h4 className="ml-5 text-black font-bold mt-3 pb-2 capitalize text-xl">
                {exercise.name}
            </h4>
        </div>
    </Link>
  )
}
